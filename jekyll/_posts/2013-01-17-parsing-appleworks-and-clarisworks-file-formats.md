---
id: 586
title: 'Parsing Appleworks and Clarisworks file formats'
date: 2013-01-17 10:00:58
author: Tea
excerpt: 'After years of off and on tinkering and documenting I finally wrote a basic parser for Appleworks and Clarisworks word processor files. I ''believe'' this is the first free and open parser for this file format, even if it is ten years too late.'
layout: post
guid: '/?p=586'
permalink: /2013/01/17/parsing-appleworks-and-clarisworks-file-formats/
dsq_thread_id:
    - '1031479226'
categories:
    - apple
    - java
tags:
    - appleworks
    - archiving
    - clarisworks
    - java
    - parser
---

Over the past few years, when I have downtime, I sometimes like to reverse engineer abandoned file formats. It is kind of like working on a crossword puzzle with the bonus that any progress you make helps people out there who are trying to archive, index, or convert their old files.


<div class="content">
    <a href="/wp-content/uploads/2013/01/hexfiend.png" class="fluidbox left small">
        <img src="/wp-content/uploads/2013/01/hexfiend-286x300.png" alt="output of hex fiend comparing two files"/>
    </a>
</div>

I've spent a lot of time trying to figure out file format for Appleworks and Clarisworks. My latest efforts have been to take a file, make a small change, then use [Hex Fiend](http://ridiculousfish.com/hexfiend/) to compare what has changed in the binary format.

After years of off and on tinkering and documenting I finally wrote a basic parser for Appleworks and Clarisworks word processor files. I ‘believe' this is the first free and open parser for this file format, even if it is ten years too late. I figured out a lot about the format, but it still has a long way to go. You can view my current documenting status [here](http://wiki.wirelust.com/x/index.php/AppleWorks_/_ClarisWorks) and download source for the parser on [GitHub](https://github.com/teacurran/appleworks-parser).

The parser so far can read:

- document version
- page size
- margins
- document content

[![output of parse](/blog/wp-content/uploads/2013/01/parse_output-300x273.png)](/blog/wp-content/uploads/2013/01/parse_output.png)

From what I have seen, most people trying to read Appleworks documents only really care about the document content, but I am very close to figuring out how to parse:

- styles – (bold, italic, underline)
- footnotes

I may not touch it again for another year, but who knows.

[![](/img/famfamicons/icons/link.png)](http://wiki.wirelust.com/x/index.php/AppleWorks_/_ClarisWorks) [Link to file format research](http://wiki.wirelust.com/x/index.php/AppleWorks_/_ClarisWorks)

[![](/img/famfamicons/icons/page_white_put.png)](https://github.com/teacurran/appleworks-parser) [Download source code at GitHub](https://github.com/teacurran/appleworks-parser)