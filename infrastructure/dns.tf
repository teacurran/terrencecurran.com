# Route 53 for domain
resource "aws_route53_zone" "main" {
  count = length(local.domain_names)
  name = local.domain_names[count.index]
  tags = local.tags
}

resource "aws_route53_record" "cloudfront-a" {
  count = length(local.domain_names)
  zone_id = aws_route53_zone.main[count.index].zone_id
  name    = local.domain_names[count.index]
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.root_s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.root_s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www-a" {
  count = length(local.domain_names)
  zone_id = aws_route53_zone.main[count.index].zone_id
  name    = "www.${local.domain_names[count.index]}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.root_s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.root_s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}


resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.ssl_certificate.domain_validation_options : dvo.domain_name => {
      name    = dvo.resource_record_name
      record  = dvo.resource_record_value
      type    = dvo.resource_record_type
      zone_id = can(regex("(terrencecurran.com)", dvo.resource_record_name)) ? aws_route53_zone.main[0].zone_id : aws_route53_zone.main[1].zone_id
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = each.value.zone_id
}

