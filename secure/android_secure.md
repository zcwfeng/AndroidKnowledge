#Android Secure
###反编译

> 工具 apktool 
> [可以到这里](4)

```
工具升级了，比以前老版本好用的多

```

### 加固打包
* 原理

```
我们在加固的过程中需要三个对象：
1、需要加密的Apk(源Apk)
2、壳程序Apk(负责解密Apk工作)
3、加密工具(将源Apk进行加密和壳Dex合并成新的Dex)

```

（一）解壳数据位于解壳程序文件尾部

> dex 结构

|-----------------------<br>
| DexHeader<br>
|-----------------------<br>
| 	checksum<br>
|-----------------------<br>
|	signature<br>
|-----------------------<br>
|	file_size<br>
|-----------------------<br>
|	<br>
|	...数据区域...<br>
|<br>
|-----------------------<br>
|<br>
|解壳DEX body<br>
|<br>
|-----------------------<br>
|<br>
|加密source dex数据<br>
|<br>
|-----------------------<br>
|加密source dex数据长度<br>
|-----------------------<br>

>加壳程序工作流程：
 
 > dex 结构

|-----------------------<br>
| DexHeader<br>
|-----------------------<br>
| 	checksum<br>
|-----------------------<br>
|	signature<br>
|-----------------------<br>
|	file_size<br>
|-----------------------<br>
|	header_size<br>
|-----------------------<br>
|	map_off<br>
|-----------------------<br>
|	string_ids_off<br>
|-----------------------<br>
|	type_ids_off<br>
|-----------------------<br>
|	photo_ids_off<br>
|-----------------------<br>
|	field_ids_off<br>
|-----------------------<br>
|	method_ids_off<br>
|-----------------------<br>
|	class_defs_off<br>
|-----------------------<br>
|	data_off<br>
|-----------------------<br>
|加密source dex数据长度<br>
|-----------------------<br>
|<br>
|加密source dex数据<br>
|<br>
|-----------------------<br>
|<br>
|解壳DEX body<br>
|<br>
|-----------------------<br>
```
                 
1、加密源程序APK文件为解壳数据
2、把解壳数据写入解壳程序Dex文件末尾，并在文件尾部添加解壳数据的大小。
3、修改解壳程序DEX头中checksum、signature 和file_size头信息。
4、修改源程序AndroidMainfest.xml文件并覆盖解壳程序AndroidMainfest.xml文件。

```

>解壳DEX程序工作流程：


```
1、读取DEX文件末尾数据获取借壳数据长度。
2、从DEX文件读取解壳数据，解密解壳数据。以文件形式保存解密数据到a.APK文件
3、通过DexClassLoader动态加载a.apk。

```
（二）解壳数据位于解壳程序文件头

> 加壳程序工作流程：

```
1、加密源程序APK文件为解壳数据
2、计算解壳数据长度，并添加该长度到解壳DEX文件头末尾，并继续解壳数据到文件头末尾。
（插入数据的位置为0x70处）
3、修改解壳程序DEX头中checksum、signature、file_size、header_size、string_ids_off、type_ids_off、proto_ids_off、field_ids_off、
method_ids_off、class_defs_off和data_off相关项。  分析map_off 数据，修改相关的数据偏移量。  
 4、修改源程序AndroidMainfest.xml文件并覆盖解壳程序AndroidMainfest.xml文件。

```
> 解壳DEX程序工作流程：

``` 
 1、从0x70处读取解壳数据长度。
 2、从DEX文件读取解壳数据，解密解壳数据。以文件形式保存解密数据到a.APK
 3、通过DexClassLoader动态加载a.APK
 
```
                 

###步骤

1. 首先采用Android Studio或Eclipse生成 apk文件。

2. 登录360加固保 地址：http://jiagu.360.cn/。如果已有帐号，请直接登陆；
如果没有，请先注册。
3. 点击“应用加固”。（省略了一些步骤，都是上网表单操作正常步骤）
4. 下载重新签名工具，点击“一键签名”等待。所生成的apk即可在各个应用市场发布啦
（不建议这么做，毕竟第三方签名总感觉怪怪的，不安全。所以自己签名吧）
如下


### android 重新签名

```
jarsigner -verbose -keystore debug.keystore -storepass android -signedjar PhoneBook_signed.apk -digestalg SHA1 -sigalg MD5withRSA PhoneBook.apk androiddebugkey

解释：-jarsigner是Java的签名工具-verbose参数表示：显示出签名详细信息-keystore表示使用当前目录中的debug.keystore签名证书文件-storepass android表示Keystore密码：“android”-signedjar PhoneBook_signed.apk表示签名后生成的APK名称PhoneBook.apk表示未签名的APK Android软件-digestalg SHA1 -sigalg MD5withRSA：这就是必须加上的参数，如果你是jdk 1.6也不受影响-androiddebugkey表示Key别名

```

[参考方案1](1)

[参考方案2](2)

[参考方案3](3)


[1]:http://blog.csdn.net/jiangwei0910410003/article/details/48415225
[2]:http://blog.csdn.net/androidsecurity/article/details/8809542
[3]:http://blog.csdn.net/forlong401/article/details/12060605/
[4]:http://ibotpeaches.github.io/Apktool/changes/