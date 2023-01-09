---
id: 525
title: 'JPA 2.0 Typed Query Example'
date: 2010-02-17 10:33:02
author: Tea
layout: revision
guid: '/2010/02/17/434-revision-2/'
permalink: '/?p=525'
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