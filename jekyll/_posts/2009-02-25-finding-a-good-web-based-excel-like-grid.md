---
id: 108
title: 'Finding a good web based Excel-like grid'
date: 2009-02-25 04:05:44
author: Tea
layout: post
guid: '/?p=108'
permalink: /2009/02/25/finding-a-good-web-based-excel-like-grid/
dsq_thread_id:
    - '476258616'
categories:
    - web
tags:
    - control
    - grid
    - widget
---

I've been searching for a good Excel-like grid widget that can be embedded in web-apps. I essentially need something like Google Docs but open so I can alter and self host it.

Here is my wishlist:

- Looks nice
- Allows inline cell editing
- good Javascript API or extensibility
- can plop into an existing project without committing to a whole framework (sorry RichFaces)
- Supports as many functions as possible, Excel functions would be nice
- Open source (LGPL or something similar)

I looked at a ton of projects. These grids looked great for displaying data but didn't have any support for functions so they were out. I'm putting the list here to remind myself to keep them in mind for other projects.

- [dhtmlXGrid](http://www.dhtmlx.com)
- [JQuery Grid](http://www.trirand.com/blog/)
- [FlexiGrid](http://code.google.com/p/flexigrid/)
- [YUI Datatable](http://developer.yahoo.com/yui/datatable/)

In the end it came down to these three projects:

- [Sigma Grid](http://www.sigmawidgets.com)
- [Simple Spreadsheet](http://www.simple-groupware.de/cms/Spreadsheet/Home)
- [Socialcalc](http://socialcalc.org/)

### Sigma Grid:

This is a nice grid for structured data and supports pretty much everything I would need for most projects. It even has chart, print, and calendar support which would make it great for end users. It supports formulas but only ones defined in the code on the page, not ones the user enters, so it wouldn't work for this particular project.

### Simple Spreadsheet

This spreadsheet appears to be the most capable Excel like clone I could find. It supports charts, formulas, and custom macros. I ended up not using this because the GUI is lacking. Out of the box my users would be forced to know some html. There also seemed to be some weird behavior when you are editing a cell with a formula in it and click on another cell. I think this would be a great project if it got a makeover and a nice user-friendly toolbar. Try it out [Here](http://www.simple-groupware.de/demo/simple_spreadsheet/index.php).

### Social Calc

 I don't remember how I found this project because their website is the least flashy and really doesn't show much about the grid at all. Social Calc could also use some help on the GUI front, and I will have to clean it up a little before I put it in my project – but it seems to be a solid reliable control. Once you get past the UI differences from Excel — you can't right click or select rows or columns — the editing is pretty smooth and natural. For client side formulas I would have been happy with =SUM() and =AVG() functions and was pleased to find =VLOOKUP() and most others working. In fact, it seems to support most Excel functions with the exact syntax that business guys love.  
It doesn't seem to be able to do nested formula calls. I am going to look into how difficult it would be to add that if I end up using it.

I couldn't find a demo of Social Calc anywhere on their site. I put their demo up [here](/examples/socialcalc/ssctrltest1.html) if you want to try it out.