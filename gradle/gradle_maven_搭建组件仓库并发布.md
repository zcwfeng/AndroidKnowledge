# gradle maven nexus搭建组件仓库与发布
>多个Android app应用需要开发，那么很有可能你需要私有的公共库。如何使用sonar nexus搭建maven仓库

######1. 安装Nexus
> 从http://www.sonatype.org/nexus/go/上下载tar.gz或者zip格式压缩包。并且解压到本地，然后进入bin目录，执行nexus

```
cd nexus-2.13.0-01/bin
./nexus start
```
> 在浏览器中输入:127.0.0.1:8081/nexus可以看到这样的页面，表示已经安装成功了。

![drawing](./nexus.png =800x500)

######2. 建立仓库
> 使用nexus默认账户名admin，密码admin123。登录进去看到已经建立了十几个仓库。
点击工具栏add -> 选择hosted repository，然后填入repository id，和repository name-> 保存，这样就可以建立新的仓库了。
如图，建立了一个名为juude的仓库。

![drawing](./nexus2.png =800x300)

######3. 上传library
> 在已经建好的android library项目的build.gradle文件中，加入以下配置：


```
apply plugin: 'maven'
apply plugin: 'signing'
signing {
    required { has("release") && gradle.taskGraph.hasTask("uploadArchives") }
    sign configurations.archives
}

uploadArchives {
    configuration = configurations.archives
    repositories.mavenDeployer {
        beforeDeployment { MavenDeployment deployment -> signing.signPom(deployment) }
        repository(url: 'http://192.168.1.19:8081/nexus/content/repositories/login-id/') {//仓库地址
            authentication(userName: "admin",//用户名
                    password: "admin123")//密码
        }

        pom.project {
            name 'baselib'
            packaging 'aar'
            description 'none'
            url 'http://192.168.1.19:8081/nexus/content/repositories/login-id/'//仓库地址
            groupId "com.yinyuetai.sdk.baselib"
            artifactId 'BaseLib' //LibA
            version "1.0"
        }
    }
}
```

> 第二种配置方式

```

apply plugin: 'maven-publish'
apply plugin: 'maven'

uploadArchives {
    repositories.mavenDeployer {
        configuration = configurations.default
        repository(url: 'http://nexus.rd.xx.com/content/repositories/releases') {//仓库地址
            authentication(userName: "deployment",//用户名
                    password: "deployment")//密码
        }

        pom.project {
            packaging 'aar'
            groupId 'com.yinyuetai.android.lib'
            artifactId "base_lib" //LibA
            version '1.0.0'
        }
    }
}
```
> 现在在项目根目录执行./gradlew tasks，就可以看到多了一个选项：

```
Upload tasks
------------
uploadArchives - Uploads all artifacts belonging to configuration ':loginlib:archives'
```
> 然后执行

```
./gradlew uploadArchives
```

> 第二种界面执行方式

```
	在你的studio 右侧gradle bar，点开找到项目根节点下的Tasks，upload下面的uploadArchives,双击就可以发布了
```


######4. 使用library
 
> 由于没有使用maven center，使用的时候需要提供自己的url地址，在build.gradle中加入：

```
maven 
{
            url "http://192.168.1.19:8081/nexus/content/repositories/login-id/"
}
```
格式如下

```
allprojects {
    repositories {
        jcenter()
        
        maven {
            url "http://192.168.1.19:8081/nexus/content/repositories/login-id/"
        }
    }


}
```

> 然后在dependency里加入compile语句。

```
compile 'com.yinyuetai.sdk.loginlib:LoginLib:1.0@aar'
compile 'com.yinyuetai.sdk.okhttplib:OkhttpLib:1.0@aar'
```
开心愉快的玩耍吧
