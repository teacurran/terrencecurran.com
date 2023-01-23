
# aws_route53_zone.main[0] because I only want draft.terrencecurran.com
resource "aws_route53_record" "draft-a" {
  zone_id = aws_route53_zone.main[0].zone_id
  name    = "draft.${local.domain_names[0]}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.draft.domain_name
    zone_id                = aws_cloudfront_distribution.draft.hosted_zone_id
    evaluate_target_health = false
  }
}
