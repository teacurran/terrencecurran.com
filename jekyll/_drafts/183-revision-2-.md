---
id: 185
date: '2009-05-21T00:20:19-04:00'
author: Tea
layout: revision
guid: '/2009/05/21/183-revision-2/'
permalink: '/?p=185'
---

Last month at Boston Bar Cam INSERT NAME gave a quick presentation on SiFR vs Cufon. I hadn't seen Cufon until then but everyone seems to be talking about it more and more. The subject of the talk and several other discussions I've had with people tends to be people saying that the foundries should just give in and let people embed their fonts DRM free.

The most recently was a post at on Mild Fuzz http://mildfuzz.com/?p=64 where I left a comment with my typical response that Cufon and SiFR don't contain any protection for foundry property and revenue.

Rather than keep fighting with people who either don't understand the issue or don't care about foundries I have been putting a lot of thought into the problem and how we can come up with a solution that satisfies both parties.

It is clear the industry needs to change and change quickly. The best solution I could come up with for the type industry is this: “Give up on the Low-end desktop market”. I think if done right, the industry can transition (similar to how Mild Fuzz suggested) into making more sales and more money.

**The Problem**  
The problem comes down to the same problem that all copyrighted property vendors have: how can you get your product into the hands of people are willing to pay without encouraging rampant piracy by everyone else. This has been the biggest thorn in the side for everyone making and selling Software, Music, Movies, Photography, or anything else you can think of.

Fonts are unlike other mediums in one critical aspect. When you sell a font to someone you are expressly selling them the right to make copies of parts of your font. If a book publisher purchases your font and prints a million books using the font then that is just fine. If someone buys one of those books they can maybe reconstruct the font by scanning and tracing it but they will never get a perfect or complete copy. This is the sort of built in DRM that fonts have.

The web, which is quickly becoming the dominent medium for most things that used to be printed, has a particular challenge – how can you distribute a typeface to end users without allowing those end users to use it for themselves. Web designers feel they should be able to purchase a typeface and use it as much as they want on a site. Until recently, designers would use a small default set of fonts in their pages and render graphic files (JPG, GIF) for fonts used in the headlines. Graphic files with fonts in them have at least as much protection as traditional printed material in that it is difficult for an end user to reconstruct and use the font.

**Other Industries**  
Other bloggers often compare the type industry to the music industry and say things like “DRM didn't work there, foundries should abandon it”. The problem with this statement is twofold, one is that the type industry is very different from the music business for the reasons stated above and the other is that the type industry traditionally does not use DRM at all. Every font you purchase will come as a .TTF, .OTF, or PostScript file with no DRM at all in it. .EOT was invented because the unique nature of the web where your design wasn't being distributed in analog form.

**Attempted Solutions**  
@font-face .EOT font embedding – Microsoft has supported their own solution for almost ten years that allows a designer to take a licensed font and wrap it into DRM for use within the browser. This solution is widely used in non english speaking cultures that require different character sets but has been abandoned in the english speaking world for a variety of reasons.  
 – It is made by microsoft with propriatary technology  
 – it relies on the browser to enforce tieing a font to a domain name. If Microsoft were to open source .EOT then there would be nothing preventing someone from making a tool that harvests the fonts from the web.  
 – it's a pain in the ass to use

@font-face is now being supported by other browsers without the .EOT abilities of MSIE. Without changes in type licensing, using @font-face puts you in violation of your font purchase agreement.

SiFR – this solution uses flash to embed a whole or subset of a font in a webpage. This is probably the most type-industry supported solution because flash has some protections that keep end users from getting at the underlying font data.

Cufon – gaining a lot of traction lately, Cufon is a javascript based solution that uses font data that has been converted into JSON for displaying type using the browsers canvas or VRML object. Cufon has about as much protection for the foundry as distributing the .TTF file on your webpage, the data is all there and can easily be converted back into TTF by a programmer who knows what they are doing.

INSERT NAME – is a server side solution that generates images on the fly for use in web pages. This is legal with most purchased type agreements but generally a bit of a pain and designers hate using it.

**Giving Up**  
So, how can foundries just give up on the desktop market? For me it is easy: My extremely stale foundry makes me less than $1000 annually and frankly I don't need the revenue. I am in the process of converting all my typefaces to creative commons licensed works with the understanding that the exposure is worth more to my career than the revenue I get from the sales. For Adobe, or Monotype, or one of the other big players I doubt they can make such a quick judgement.

**Licensing**  
A lot of people forget that font distribution on the web is not a technical problem it is simply a Licensing problem. I think the only way that we can get out of this is for foundries to start licensing websites (per domain name) to use their fonts and give up on any sales they were trying to get from end users.

If a user downloads one of Adobe's fonts from a website that has embedded it and uses it in something they make without paying the licensing fee then there is nothing we can do about it. The foundry will probably never know that an infringement happened.

**Enforcement**  
The good thing about license enforcement on the web that should be a saving grace to foundries is that most web sites are public and can be inspected, unlike end-users desktops which can't be.

If we were to maintain a registry of fonts and which sites were allowed to use those fonts then it is simply a matter of checking the site against the registry. There could be a web crawler that checks for compliance and sends off emails to domains not in compliance. Foundries could then also get a report of who is violating their licensing and choose to either ignore it or attempt to collect a fee.

Small personal blogs might not comply even in the face of a cease and desist, but most companies and organizations would probably pay the $30-$100 in order to get their site into compliance.

**Two way street**  
Saying that the type industry needs to change is one thing. The other thing that needs to change for this to work is the designers themselves. Font piracy is totally rampant in almost every design shop I've ever been in and font licensing simply isn't factored into the price of designs. Designers need to step up and ask their clients and superiors what their budget is for typefaces. A well designed website will probably need to spend a few hundred dollars on fonts and that is something that clients should get used to. Without participation from designers, foundries are never going to sign on and try to do all the enforcement themselves.