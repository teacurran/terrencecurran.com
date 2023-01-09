---
id: 465
title: 'The best Chrome feature: violation of Apple Human Interface'
date: '2010-03-25T14:53:45-04:00'
author: Tea
layout: post
guid: '/?p=465'
permalink: /2010/03/25/the-best-chrome-feature-violation-of-apple-human-interface/
aktt_notify_twitter:
    - 'no'
dsq_thread_id:
    - '476168429'
categories:
    - apple
    - web
tags:
    - apple
    - chrome
    - google
    - UX
---

Google Chrome is awesome. There don't seem to be many people out there that will argue otherwise.

One of the things I like best about it is that they seem to willing to do whatever it takes to make the best user experience out of their product. They aren't worried about the politics or competing interests that seem to plague progress on Firefox.

In my opinion, one of the best feature of Google Chrome on OSX is that it violates the Apple Human Interface Guidelines.

Apple has very strict [interface guidelines](http://developer.apple.com/Mac/library/documentation/UserExperience/Conceptual/AppleHIGuidelines/XHIGIntro/XHIGIntro.html) that developers by and large tend to stick to. Partially because of Interface Builder, partially because of the community, applications on OSX tend to look and behave the same. This is in contrast to Windows where Microsoft can't seem to settle for a single Widget toolkit for their own applications. So the guidelines are great, except when they are not.

### Tabs in the title bar

The most obvious violation is related to tabs in the title bar of the UI.

[from the guidelines](http://developer.apple.com/Mac/library/documentation/UserExperience/Conceptual/AppleHIGuidelines/XHIGWindows/XHIGWindows.html):

> The only controls that belong in a title bar are the close, minimize, and zoom buttons. If a title bar is combined with a toolbar, the unified area can contain the toolbar control and the toolbar customization contextual menu (these controls are described in “Title Bar Buttons”). Do not place other controls in a title bar.

This is in some ways just a nicety, but it is a new way to think about how to group information. It separates the tabs and makes it much more clear to a user that the back, forward, and URL controls are specific to the content in that tab. This also has the added benefit of making it possible for windows to be dropped into other windows to be merged or split.

### Control focus when tabbing on the keyboard

According to the guidelines, controls should only receive focus if they are text entry fields. This means that hitting tab on a form will always tab over a drop down box.

[from the guidelines](http://developer.apple.com/Mac/library/documentation/UserExperience/Conceptual/AppleHIGuidelines/XHIGUserInput/XHIGUserInput.html#//apple_ref/doc/uid/TP30000361-DontLinkElementID_1550)

> In default keyboard access mode, focus moves only between fields that receive keyboard input.

Anybody that has entered an address on a website knows what a pain in the ass it is when it tabs right past the state drop down field.

Apple suggests that application designers avoid this problem by limiting popup menus to be used only when you have short lists of items.  
[from the guidelines](http://developer.apple.com/Mac/library/documentation/UserExperience/Conceptual/AppleHIGuidelines/XHIGControls/XHIGControls.html#//apple_ref/doc/uid/TP30000359-TPXREF132):

> Use a pop-up menu to present up to 12 mutually exclusive choices that the user doesnâ€™t need to see all the time. Sometimes a pop-up menu can be a good alternative to other types of selection controls.

Good in theory, but this isn't how popups are used. Not in applications, and especially not on the web. Chrome tabs to select boxes on OSX like it does on other platforms. Google has decided that the web is their operating system and is using the same UX design across platforms accordingly. Perhaps it is time for companies to come together and come up with some cross-OS UX behaviors.

\*This is actually one of my biggest pet peeves with the apple UI guidelines. They were set in stone many years ago and very rarely change. I understand the need for consistency but I think things like tabbing to all controls on a web-page need to be addressed. Perhaps they are long overdue for a review and overhaul. Apple, after all, is notorious for violating their own guidelines.