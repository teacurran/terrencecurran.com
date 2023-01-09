---
id: 4
title: 'Google Maps You Have Failed Me'
date: 2006-12-07 17:37:03
author: Tea
layout: post
guid: 'http://wirelust.com/blog/2006/12/07/google-maps-you-have-failed-me/'
permalink: /2006/12/07/google-maps-you-have-failed-me/
dsq_thread_id:
    - '475679840'
categories:
    - web
---

 Today I had to meet at a clients office that I had never been to before. Given that I have 100% faith in technology, I mapped out the directions using a map I had created for the client as my starting point. When I got there I was in the totally incorrect place (a first for me when using google). I opened up Google maps on my phone and was able to get directions from the incorrect address to the correct one. I assumed at the time that the original map had the incorrect address typed in on it.

When I got back to the office I tried to fix the client's site and found myself unable to. It turns out that the maps that google spits out for its embedded API are different than the maps that google's site itself uses. I searched and searched and couldn't find any reference of this anywhere on the web. I will search more after this post.

Here is the map that google's site spits out for the address I am searching for:  
[![](http://www.teacurran.com/images/lj/google_maps_site.png)](http://www.teacurran.com/images/lj/google_maps_site.png)

Here is the map that google's API returns for the same area:

[![](http://www.teacurran.com/images/lj/google_maps_api.png)](http://www.teacurran.com/images/lj/google_maps_api.png)

It seems that google's site and Google mobile are using map data from Navteq, while the API is using map data from TeleAtlas.

Interestingly though, the TeleAtlas data appears to be correct and more up to date, but the geocoding for the address is only correct on the [Navteq map](http://maps.google.com/maps?f=q&hl=en&q=400+West+Cummings+Park,+Woburn,+MA+01801&ie=UTF8&z=15&om=1&iwloc=addr).

The geocode for the same address on the more up to date map is three miles off.

For good measure I checked out the Yahoo api, which says that it uses data from both TeleAtlas and/or Navteq. It appears to just be Navteq though:

[![](http://www.teacurran.com/images/lj/yahoo_maps_api.png)](http://www.teacurran.com/images/lj/yahoo_maps_api.png)

Anyone know anything more about this?

Also, taking screen shots I realize just how [1337](http://www.teacurran.com/images/lj/desktop_200612.png) I really am, or messy, ha.