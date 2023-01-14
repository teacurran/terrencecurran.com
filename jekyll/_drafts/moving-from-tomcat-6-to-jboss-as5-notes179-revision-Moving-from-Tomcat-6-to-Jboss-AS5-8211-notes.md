---
id: 180
title: 'Moving from Tomcat 6 to Jboss AS5 &#8211; notes'
date: '2009-05-18T01:28:24-04:00'
author: Tea
layout: revision
guid: '/2009/05/18/179-revision/'
permalink: '/?p=180'
---

I'm moving a bunch of single WAR sites from Tomcat 6 to Jboss AS5. Here are the configuration steps that need to be taken.

Assuming this is your tomcat config file:  
%TOMCAT\_HOME%/conf/server.xml:

```xml
<span style="font-weight: bold; color: black;"><Host appBase="/home/wirelust/terrencecurran.com" autoDeploy="false"
     debug="0" deployXML="true" liveDeploy="true"
     name="domainname.com"
     unpackWARs="true"></span>
 
    <span style="font-weight: bold; color: black;"><Alias<span style="font-weight: bold; color: black;">></span></span>www.terrencecurran.com<span style="font-weight: bold; color: black;"></Alias<span style="font-weight: bold; color: black;">></span></span>
 
     <span style="font-weight: bold; color: black;"><Context cachingAllowed="true" cookies="true" crossContext="true" debug="0"
             displayName="wirelust" docBase="." path="" privileged="false"
             reloadable="true" swallowOutput="false" useNaming="true"></span>
             <span style="font-weight: bold; color: black;"><Resource auth="SERVLET" name="wirelustDatasource" scope="Shareable" type="javax.sql.DataSource"
                     username="username"
                     password="password"
                     driverClassName="net.sourceforge.jtds.jdbc.Driver"
                     url="jdbc:jtds:sqlserver://sql.terrencecurran.com/database"
                     removeAbandoned="true"
                     removeAbandonedTimeout="30"
                     logAbandoned="true"
             /></span>
     <span style="font-weight: bold; color: black;"></Context<span style="font-weight: bold; color: black;">></span></span>
<span style="font-weight: bold; color: black;"></Host<span style="font-weight: bold; color: black;">></span></span>
```

Becomes the embedded tomcat config file:  
%JBOSS\_HOME%/server/default/deploy/jbossweb.sar/server.xml

```xml
<span style="font-weight: bold; color: black;"><Host appBase="/home/wirelust/deploy/terrencecurran.com.war" autoDeploy="false"
     debug="0" deployXML="true" liveDeploy="true"
     name="domainname.com"
     unpackWARs="true"></span>
 
    <span style="font-weight: bold; color: black;"><Alias<span style="font-weight: bold; color: black;">></span></span>www.terrencecurran.com<span style="font-weight: bold; color: black;"></Alias<span style="font-weight: bold; color: black;">></span></span>
<span style="font-weight: bold; color: black;"></Host<span style="font-weight: bold; color: black;">></span></span>
```

Notice that the appBase is now in a folder called “deploy”. You have to add this deploy folder to the config file:  
%JBOSS\_HOME%/server/default/conf/bootstrap/profile.xml

```xml
<span style="font-weight: bold; color: black;"><bean name="BootstrapProfileFactory" class="org.jboss.system.server.profileservice.repository.StaticProfileFactory"></span>
        <span style="font-weight: bold; color: black;"><property name="bootstrapURI"></span>${jboss.server.home.url}conf/jboss-service.xml<span style="font-weight: bold; color: black;"></property<span style="font-weight: bold; color: black;">></span></span>
        <span style="font-weight: bold; color: black;"><property name="deployersURI"></span>${jboss.server.home.url}deployers<span style="font-weight: bold; color: black;"></property<span style="font-weight: bold; color: black;">></span></span>
        <span style="font-weight: bold; color: black;"><property name="applicationURIs"></span>
            <span style="font-weight: bold; color: black;"><list elementClass="java.net.URI"></span>
                <span style="font-weight: bold; color: black;"><value<span style="font-weight: bold; color: black;">></span></span>${jboss.server.home.url}deploy<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
 
                <span style="font-weight: bold; color: black;"><value<span style="font-weight: bold; color: black;">></span></span>file:/home/wirelust/deploy<span style="font-weight: bold; color: black;"></value<span style="font-weight: bold; color: black;">></span></span>
            <span style="font-weight: bold; color: black;"></list<span style="font-weight: bold; color: black;">></span></span>
        <span style="font-weight: bold; color: black;"></property<span style="font-weight: bold; color: black;">></span></span>
        <span style="font-weight: bold; color: black;"><property name="attachmentStoreRoot"></span>${jboss.server.data.dir}/attachments<span style="font-weight: bold; color: black;"></property<span style="font-weight: bold; color: black;">></span></span>
        <span style="font-weight: bold; color: black;"><property name="profileFactory"></span><span style="font-weight: bold; color: black;"><inject bean="ProfileFactory" /></span><span style="font-weight: bold; color: black;"></property<span style="font-weight: bold; color: black;">></span></span>
    <span style="font-weight: bold; color: black;"></bean<span style="font-weight: bold; color: black;">></span></span>
```

Make sure your exploded directory ends in .war or jboss won't see it.

Then in that new deploy directory, create a datasource file, in this case called “wirelust-ds.xml” with these contents:

```xml
<span style="font-weight: bold; color: black;"><?xml version="1.0" encoding="UTF-8"?></span>
 

<span style="font-weight: bold; color: black;"><datasources<span style="font-weight: bold; color: black;">></span></span>
    <span style="font-weight: bold; color: black;"><local-tx-datasource></span>
        <span style="font-weight: bold; color: black;"><jndi-name></span>wirelustDatasource<span style="font-weight: bold; color: black;"></jndi-name></span>
        <span style="font-weight: bold; color: black;"><connection-url></span>jdbc:jtds:sqlserver://sql.terrencecurran.com/wirelust<span style="font-weight: bold; color: black;"></connection-url></span>
        <span style="font-weight: bold; color: black;"><use-java-context></span>false<span style="font-weight: bold; color: black;"></use-java-context></span>
        <span style="font-weight: bold; color: black;"><driver-class></span>net.sourceforge.jtds.jdbc.Driver<span style="font-weight: bold; color: black;"></driver-class></span>
        <span style="font-weight: bold; color: black;"><user-name></span>username<span style="font-weight: bold; color: black;"></user-name></span>
        <span style="font-weight: bold; color: black;"><password<span style="font-weight: bold; color: black;">></span></span>password<span style="font-weight: bold; color: black;"></password<span style="font-weight: bold; color: black;">></span></span>
 
        <span style="font-weight: bold; color: black;"><Pool.LogAbandoned></span>false<span style="font-weight: bold; color: black;"></Pool.LogAbandoned></span>
        <span style="font-weight: bold; color: black;"><Pool.RemoveAbandoned></span>false<span style="font-weight: bold; color: black;"></Pool.RemoveAbandoned></span>
        <span style="font-weight: bold; color: black;"><Pool.RemoveAbandonedTimeout></span>50000<span style="font-weight: bold; color: black;"></Pool.RemoveAbandonedTimeout></span>
   <span style="font-weight: bold; color: black;"></local-tx-datasource></span>
<span style="font-weight: bold; color: black;"></datasources<span style="font-weight: bold; color: black;">></span></span>
```

In order to bind to the correct virtual host, you have to create a new file in your exploded WEB-INF directory called jboss-web.xml with these contents:

```xml

 
<span style="font-weight: bold; color: black;"><jboss-web></span>  
    <span style="font-weight: bold; color: black;"><context-root></span>/<span style="font-weight: bold; color: black;"></context-root></span>  
    <span style="font-weight: bold; color: black;"><virtual-host></span>terrencecurran.com<span style="font-weight: bold; color: black;"></virtual-host></span>
<span style="font-weight: bold; color: black;"></jboss-web></span>
```

Then the last change you have to make is how you are looking up your datasource in the application.  
If you have code like this in your tomcat application it will fail because your jndi is not bound to java:comp/env:

```java
"java:comp/env");
DataSource ds = (DataSource)envCtx.lookup("wirelustDatasource"
```

This of course can be fixed with some further configuration and resource-ref settings but I couldn't get that to work so I just changed the code to work either way:

```java
// look for the datasource in the tomcat location
"java:comp/env");
		ds = (DataSource)envCtx.lookup("wirelustDatasource"// look for it in the jboss location
// open the connection
"Error Getting Connection : ""-"
```