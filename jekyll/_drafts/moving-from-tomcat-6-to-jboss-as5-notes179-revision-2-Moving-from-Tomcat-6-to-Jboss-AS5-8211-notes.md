---
id: 181
title: 'Moving from Tomcat 6 to Jboss AS5 &#8211; notes'
date: '2009-05-18T01:28:32-04:00'
author: Tea
layout: revision
guid: '/2009/05/18/179-revision-2/'
permalink: '/?p=181'
---

I'm moving a bunch of single WAR sites from Tomcat 6 to Jboss AS5. Here are the configuration steps that need to be taken.

Assuming this is your tomcat config file:  
%TOMCAT\_HOME%/conf/server.xml:

```xml
<span style="color: #009900;"><span style="font-weight: bold; color: black;"><Host</span> <span style="color: #000066;">appBase</span>=<span style="color: #ff0000;">"/home/wirelust/terrencecurran.com"</span> <span style="color: #000066;">autoDeploy</span>=<span style="color: #ff0000;">"false"</span>
     <span style="color: #000066;">debug</span>=<span style="color: #ff0000;">"0"</span> <span style="color: #000066;">deployXML</span>=<span style="color: #ff0000;">"true"</span> <span style="color: #000066;">liveDeploy</span>=<span style="color: #ff0000;">"true"</span>
     <span style="color: #000066;">name</span>=<span style="color: #ff0000;">"domainname.com"</span>
     <span style="color: #000066;">unpackWARs</span>=<span style="color: #ff0000;">"true"</span><span style="font-weight: bold; color: black;">></span></span>
 
    <span style="color: #009900;"><span style="font-weight: bold; color: black;"><Alias<span style="font-weight: bold; color: black;">></span></span></span>www.terrencecurran.com<span style="color: #009900;"><span style="font-weight: bold; color: black;"></Alias<span style="font-weight: bold; color: black;">></span></span></span>
 
     <span style="color: #009900;"><span style="font-weight: bold; color: black;"><Context</span> <span style="color: #000066;">cachingAllowed</span>=<span style="color: #ff0000;">"true"</span> <span style="color: #000066;">cookies</span>=<span style="color: #ff0000;">"true"</span> <span style="color: #000066;">crossContext</span>=<span style="color: #ff0000;">"true"</span> <span style="color: #000066;">debug</span>=<span style="color: #ff0000;">"0"</span>
             <span style="color: #000066;">displayName</span>=<span style="color: #ff0000;">"wirelust"</span> <span style="color: #000066;">docBase</span>=<span style="color: #ff0000;">"."</span> <span style="color: #000066;">path</span>=<span style="color: #ff0000;">""</span> <span style="color: #000066;">privileged</span>=<span style="color: #ff0000;">"false"</span>
             <span style="color: #000066;">reloadable</span>=<span style="color: #ff0000;">"true"</span> <span style="color: #000066;">swallowOutput</span>=<span style="color: #ff0000;">"false"</span> <span style="color: #000066;">useNaming</span>=<span style="color: #ff0000;">"true"</span><span style="font-weight: bold; color: black;">></span></span>
             <span style="color: #009900;"><span style="font-weight: bold; color: black;"><Resource</span> <span style="color: #000066;">auth</span>=<span style="color: #ff0000;">"SERVLET"</span> <span style="color: #000066;">name</span>=<span style="color: #ff0000;">"wirelustDatasource"</span> <span style="color: #000066;">scope</span>=<span style="color: #ff0000;">"Shareable"</span> <span style="color: #000066;">type</span>=<span style="color: #ff0000;">"javax.sql.DataSource"</span>
                     <span style="color: #000066;">username</span>=<span style="color: #ff0000;">"username"</span>
                     <span style="color: #000066;">password</span>=<span style="color: #ff0000;">"password"</span>
                     <span style="color: #000066;">driverClassName</span>=<span style="color: #ff0000;">"net.sourceforge.jtds.jdbc.Driver"</span>
                     <span style="color: #000066;">url</span>=<span style="color: #ff0000;">"jdbc:jtds:sqlserver://sql.terrencecurran.com/database"</span>
                     <span style="color: #000066;">removeAbandoned</span>=<span style="color: #ff0000;">"true"</span>
                     <span style="color: #000066;">removeAbandonedTimeout</span>=<span style="color: #ff0000;">"30"</span>
                     <span style="color: #000066;">logAbandoned</span>=<span style="color: #ff0000;">"true"</span>
             <span style="font-weight: bold; color: black;">/></span></span>
     <span style="color: #009900;"><span style="font-weight: bold; color: black;"></Context<span style="font-weight: bold; color: black;">></span></span></span>
<span style="color: #009900;"><span style="font-weight: bold; color: black;"></Host<span style="font-weight: bold; color: black;">></span></span></span>
```

Becomes the embedded tomcat config file:  
%JBOSS\_HOME%/server/default/deploy/jbossweb.sar/server.xml

```xml
<span style="color: #009900;"><span style="font-weight: bold; color: black;"><Host</span> <span style="color: #000066;">appBase</span>=<span style="color: #ff0000;">"/home/wirelust/deploy/terrencecurran.com.war"</span> <span style="color: #000066;">autoDeploy</span>=<span style="color: #ff0000;">"false"</span>
     <span style="color: #000066;">debug</span>=<span style="color: #ff0000;">"0"</span> <span style="color: #000066;">deployXML</span>=<span style="color: #ff0000;">"true"</span> <span style="color: #000066;">liveDeploy</span>=<span style="color: #ff0000;">"true"</span>
     <span style="color: #000066;">name</span>=<span style="color: #ff0000;">"domainname.com"</span>
     <span style="color: #000066;">unpackWARs</span>=<span style="color: #ff0000;">"true"</span><span style="font-weight: bold; color: black;">></span></span>
 
    <span style="color: #009900;"><span style="font-weight: bold; color: black;"><Alias<span style="font-weight: bold; color: black;">></span></span></span>www.terrencecurran.com<span style="color: #009900;"><span style="font-weight: bold; color: black;"></Alias<span style="font-weight: bold; color: black;">></span></span></span>
<span style="color: #009900;"><span style="font-weight: bold; color: black;"></Host<span style="font-weight: bold; color: black;">></span></span></span>
```

Notice that the appBase is now in a folder called “deploy”. You have to add this deploy folder to the config file:  
%JBOSS\_HOME%/server/default/conf/bootstrap/profile.xml

```xml
<span style="color: #009900;"><span style="font-weight: bold; color: black;"><bean</span> <span style="color: #000066;">name</span>=<span style="color: #ff0000;">"BootstrapProfileFactory"</span> <span style="color: #000066;">class</span>=<span style="color: #ff0000;">"org.jboss.system.server.profileservice.repository.StaticProfileFactory"</span><span style="font-weight: bold; color: black;">></span></span>
        <span style="color: #009900;"><span style="font-weight: bold; color: black;"><property</span> <span style="color: #000066;">name</span>=<span style="color: #ff0000;">"bootstrapURI"</span><span style="font-weight: bold; color: black;">></span></span>${jboss.server.home.url}conf/jboss-service.xml<span style="color: #009900;"><span style="font-weight: bold; color: black;"></property<span style="font-weight: bold; color: black;">></span></span></span>
        <span style="color: #009900;"><span style="font-weight: bold; color: black;"><property</span> <span style="color: #000066;">name</span>=<span style="color: #ff0000;">"deployersURI"</span><span style="font-weight: bold; color: black;">></span></span>${jboss.server.home.url}deployers<span style="color: #009900;"><span style="font-weight: bold; color: black;"></property<span style="font-weight: bold; color: black;">></span></span></span>
        <span style="color: #009900;"><span style="font-weight: bold; color: black;"><property</span> <span style="color: #000066;">name</span>=<span style="color: #ff0000;">"applicationURIs"</span><span style="font-weight: bold; color: black;">></span></span>
            <span style="color: #009900;"><span style="font-weight: bold; color: black;"><list</span> <span style="color: #000066;">elementClass</span>=<span style="color: #ff0000;">"java.net.URI"</span><span style="font-weight: bold; color: black;">></span></span>
                <span style="color: #009900;"><span style="font-weight: bold; color: black;"><value<span style="font-weight: bold; color: black;">></span></span></span>${jboss.server.home.url}deploy<span style="color: #009900;"><span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span></span>
 
                <span style="color: #009900;"><span style="font-weight: bold; color: black;"><value<span style="font-weight: bold; color: black;">></span></span></span>file:/home/wirelust/deploy<span style="color: #009900;"><span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span></span>
            <span style="color: #009900;"><span style="font-weight: bold; color: black;"></list<span style="font-weight: bold; color: black;">></span></span></span>
        <span style="color: #009900;"><span style="font-weight: bold; color: black;"></property<span style="font-weight: bold; color: black;">></span></span></span>
        <span style="color: #009900;"><span style="font-weight: bold; color: black;"><property</span> <span style="color: #000066;">name</span>=<span style="color: #ff0000;">"attachmentStoreRoot"</span><span style="font-weight: bold; color: black;">></span></span>${jboss.server.data.dir}/attachments<span style="color: #009900;"><span style="font-weight: bold; color: black;"></property<span style="font-weight: bold; color: black;">></span></span></span>
        <span style="color: #009900;"><span style="font-weight: bold; color: black;"><property</span> <span style="color: #000066;">name</span>=<span style="color: #ff0000;">"profileFactory"</span><span style="font-weight: bold; color: black;">></span></span><span style="color: #009900;"><span style="font-weight: bold; color: black;"><inject</span> <span style="color: #000066;">bean</span>=<span style="color: #ff0000;">"ProfileFactory"</span> <span style="font-weight: bold; color: black;">/></span></span><span style="color: #009900;"><span style="font-weight: bold; color: black;"></property<span style="font-weight: bold; color: black;">></span></span></span>
    <span style="color: #009900;"><span style="font-weight: bold; color: black;"></bean<span style="font-weight: bold; color: black;">></span></span></span>
```

Make sure your exploded directory ends in .war or jboss won't see it.

Then in that new deploy directory, create a datasource file, in this case called “wirelust-ds.xml” with these contents:

```xml
<span style="color: #009900;"><span style="font-weight: bold; color: black;"><?xml</span> <span style="color: #000066;">version</span>=<span style="color: #ff0000;">"1.0"</span> <span style="color: #000066;">encoding</span>=<span style="color: #ff0000;">"UTF-8"</span><span style="font-weight: bold; color: black;">?></span></span>
 
<span style="color: #00bbdd;"></span>
<span style="color: #009900;"><span style="font-weight: bold; color: black;"><datasources<span style="font-weight: bold; color: black;">></span></span></span>
    <span style="color: #009900;"><span style="font-weight: bold; color: black;"><local</span>-tx-datasource<span style="font-weight: bold; color: black;">></span></span>
        <span style="color: #009900;"><span style="font-weight: bold; color: black;"><jndi</span>-name<span style="font-weight: bold; color: black;">></span></span>wirelustDatasource<span style="color: #009900;"><span style="font-weight: bold; color: black;"></jndi</span>-name<span style="font-weight: bold; color: black;">></span></span>
        <span style="color: #009900;"><span style="font-weight: bold; color: black;"><connection</span>-url<span style="font-weight: bold; color: black;">></span></span>jdbc:jtds:sqlserver://sql.terrencecurran.com/wirelust<span style="color: #009900;"><span style="font-weight: bold; color: black;"></connection</span>-url<span style="font-weight: bold; color: black;">></span></span>
        <span style="color: #009900;"><span style="font-weight: bold; color: black;"><use</span>-java-context<span style="font-weight: bold; color: black;">></span></span>false<span style="color: #009900;"><span style="font-weight: bold; color: black;"></use</span>-java-context<span style="font-weight: bold; color: black;">></span></span>
        <span style="color: #009900;"><span style="font-weight: bold; color: black;"><driver</span>-class<span style="font-weight: bold; color: black;">></span></span>net.sourceforge.jtds.jdbc.Driver<span style="color: #009900;"><span style="font-weight: bold; color: black;"></driver</span>-class<span style="font-weight: bold; color: black;">></span></span>
        <span style="color: #009900;"><span style="font-weight: bold; color: black;"><user</span>-name<span style="font-weight: bold; color: black;">></span></span>username<span style="color: #009900;"><span style="font-weight: bold; color: black;"></user</span>-name<span style="font-weight: bold; color: black;">></span></span>
        <span style="color: #009900;"><span style="font-weight: bold; color: black;"><password<span style="font-weight: bold; color: black;">></span></span></span>password<span style="color: #009900;"><span style="font-weight: bold; color: black;"></password<span style="font-weight: bold; color: black;">></span></span></span>
 
        <span style="color: #009900;"><span style="font-weight: bold; color: black;"><Pool</span>.LogAbandoned<span style="font-weight: bold; color: black;">></span></span>false<span style="color: #009900;"><span style="font-weight: bold; color: black;"></Pool</span>.LogAbandoned<span style="font-weight: bold; color: black;">></span></span>
        <span style="color: #009900;"><span style="font-weight: bold; color: black;"><Pool</span>.RemoveAbandoned<span style="font-weight: bold; color: black;">></span></span>false<span style="color: #009900;"><span style="font-weight: bold; color: black;"></Pool</span>.RemoveAbandoned<span style="font-weight: bold; color: black;">></span></span>
        <span style="color: #009900;"><span style="font-weight: bold; color: black;"><Pool</span>.RemoveAbandonedTimeout<span style="font-weight: bold; color: black;">></span></span>50000<span style="color: #009900;"><span style="font-weight: bold; color: black;"></Pool</span>.RemoveAbandonedTimeout<span style="font-weight: bold; color: black;">></span></span>
   <span style="color: #009900;"><span style="font-weight: bold; color: black;"></local</span>-tx-datasource<span style="font-weight: bold; color: black;">></span></span>
<span style="color: #009900;"><span style="font-weight: bold; color: black;"></datasources<span style="font-weight: bold; color: black;">></span></span></span>
```

In order to bind to the correct virtual host, you have to create a new file in your exploded WEB-INF directory called jboss-web.xml with these contents:

```xml
<span style="color: #00bbdd;"></span>
 
<span style="color: #009900;"><span style="font-weight: bold; color: black;"><jboss</span>-web<span style="font-weight: bold; color: black;">></span></span>  
    <span style="color: #009900;"><span style="font-weight: bold; color: black;"><context</span>-root<span style="font-weight: bold; color: black;">></span></span>/<span style="color: #009900;"><span style="font-weight: bold; color: black;"></context</span>-root<span style="font-weight: bold; color: black;">></span></span>  
    <span style="color: #009900;"><span style="font-weight: bold; color: black;"><virtual</span>-host<span style="font-weight: bold; color: black;">></span></span>terrencecurran.com<span style="color: #009900;"><span style="font-weight: bold; color: black;"></virtual</span>-host<span style="font-weight: bold; color: black;">></span></span>
<span style="color: #009900;"><span style="font-weight: bold; color: black;"></jboss</span>-web<span style="font-weight: bold; color: black;">></span></span>
```

Then the last change you have to make is how you are looking up your datasource in the application.  
If you have code like this in your tomcat application it will fail because your jndi is not bound to java:comp/env:

```java
"java:comp/env"<span style="color: #66cc66;">)</span>;
DataSource ds = <span style="color: #66cc66;">(</span>DataSource<span style="color: #66cc66;">)</span>envCtx.<span style="color: #006600;">lookup</span><span style="color: #66cc66;">(</span><span style="color: #ff0000;">"wirelustDatasource"</span>
```

This of course can be fixed with some further configuration and resource-ref settings but I couldn't get that to work so I just changed the code to work either way:

```java
// look for the datasource in the tomcat location
<span style="color: #ff0000;">"java:comp/env"</span><span style="color: #66cc66;">)</span>;
		ds = <span style="color: #66cc66;">(</span>DataSource<span style="color: #66cc66;">)</span>envCtx.<span style="color: #006600;">lookup</span><span style="color: #66cc66;">(</span><span style="color: #ff0000;">"wirelustDatasource"</span><span style="color: #808080; font-style: italic;">// look for it in the jboss location</span>
<span style="color: #808080; font-style: italic;">// open the connection</span>
 
```
