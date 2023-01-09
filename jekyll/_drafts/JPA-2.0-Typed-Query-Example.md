---
id: 434
title: 'JPA 2.0 Typed Query Example'
date: 2011-11-17 14:58:00
author: Tea
layout: post
guid: '/?p=434'
permalink: '/?p=434'
aktt_notify_twitter:
    - 'no'
categories:
    - Uncategorized
---

JPA 2.0 Typed Query Example

I was getting the error “traverse cannot be null”.

@Entity  
@NamedQueries( {  
 @NamedQuery(  
 name = User.NAMED\_QUERY\_ALL,  
 query = “select u FROM User u”)  
})

TypedQuery<user> query = em.createQuery(User.NAMED\_QUERY\_ALL, User.class);  
return query.getResultList();</user>