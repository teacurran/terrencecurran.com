---
id: 456
date: 2010-01-25 17:25:50
author: Tea
layout: revision
guid: '/2010/01/25/434-revision/'
permalink: '/?p=456'
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