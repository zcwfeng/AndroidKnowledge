#gradle android 配置与经验
* gradle android 项目最外层处理

> 如果不想设置代理，那么只能用国内镜像,可以做如下配置

```
buildscript {
    repositories {
        maven { url 'http://maven.oschina.net/content/groups/public/' }

        jcenter()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:2.1.0'
        classpath 'com.android.tools.build:gradle-experimental:0.7.0-rc1'//jni ndk 新版插件
    }
}

allprojects {
    repositories {
        maven { url 'http://maven.oschina.net/content/groups/public/' }
        maven {
            url "http://mvn.gt.igexin.com/nexus/content/repositories/releases/"
        }
        jcenter()
    }
}

task clean(type: Delete) {
    delete rootProject.buildDir
}
```


* clean gradle 工程


```
./gradlew clean assemble

```