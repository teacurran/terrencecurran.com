---
id: 166
title: 'From Java to Flex'
date: 2011-11-17 14:59:16
author: Tea
layout: post
guid: '/?p=166'
permalink: '/?p=166'
aktt_notify_twitter:
    - 'no'
categories:
    - flash
    - Uncategorized
---

Syntax Differences  
Class Structure

Java:

```java
import java.io.DataInput;
<span style="color: #a1a100;">import java.awt.Graphics;</span>
<span style="color: #a1a100;">import java.awt.geom.Line2D;</span>
<span style="color: #a1a100;">import java.awt.geom.GeneralPath;</span>
 
```

  
Actionscript:  
```actionscript
 
```

**Method (function) definitions**

```java
 
```

```actionscript
 
```

**No Method overloading**

```java
 
```

Since actionscript doesn't have any method overloading, there are a few workarounds you can do:  
default parameters:

```actionscript
""<span style="color: #66cc66;">)</span> <span style="color: #66cc66;">{</span>
<span style="color: #66cc66;">}</span>
```

generic args:

```actionscript
 
```

Casting:

```java
 
```

```actionscript
 
```

Things Actionscript has that Java doesn't:  
Properties! arguebally one of the most asked for features for Java, it eliminates the need for all the getters and setters you have in java:

```java
 
```

In actionscript it is perferred to use properties and just make your variables public unless you need to override the setter and getter:

```actionscript
 
```

If you need to override the get and set, you make them private and just write the overrides:

```actionscript
// do something with height
<span style="color: #808080; font-style: italic;">// do something before setting height</span>
<span style="color: #808080; font-style: italic;">// your api calls remain the same</span>
 
```

Namespaces:

```javascript
 
```