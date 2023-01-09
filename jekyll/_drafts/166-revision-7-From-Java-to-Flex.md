---
id: 290
title: 'From Java to Flex'
date: '2009-06-08T03:51:08-04:00'
author: Tea
layout: revision
guid: '/2009/06/08/166-revision-7/'
permalink: '/?p=290'
---

Syntax Differences  
Class Structure

Java:

```java
import java.io.DataInput;
import java.awt.Graphics;
import java.awt.geom.Line2D;
import java.awt.geom.GeneralPath;
 
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
"") {
}
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
// do something before setting height
// your api calls remain the same
 
```

Namespaces:

```javascript
 
```