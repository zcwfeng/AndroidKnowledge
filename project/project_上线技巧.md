# Project 上线技巧
> #### 签名获取

```
keytool -exportcert -alias androiddebugkey -keystore /Users/zcw/.android/debug.keystore -list -v
```
> ####跳转应用商店

* 通过Java包名直接定位到你的App

```
	http://market.android.com/details?id=<java包名>
	或者
	market://details?id=<java包名>
```

范例：market://details?id=com.skyd.luckywheel

这将直接在菜市场中显示你的App详细介绍页。

* 通过Java包名搜索App

```
	http://market.android.com/search?q=pname:<java包名>
	或者
	market://search?q=pname:<java包名>
```
范例：market://search?q=pname:com.skyd.luckywheel

这将显示搜索到的App列表。

* 通过开发者名称搜索App

```
	http://market.android.com/search?q=pub:<开发者名称>
	或者
	market://search?q=pub:<开发者名称>
```

范例：market://search?q=pub:SkyD

这将显示开发者发布的所有App列表。



* 通过关键词搜索App

```
	http://market.android.com/search?q=<关键词>
	或者
	market://search?q=<关键词>
```
范例：market://search?q=luckywheel

这将显示搜索到的标题（及内容？）中包含此关键词的所有App列表，需注意的是：这个是语言相关的，如果App中有对应于你机器的语言，那么你就要以这个语言搜才容易找到，搜索其他语言版本的名称应该是找不到该软件的，所以这种方法不推荐使用。


* 组合查询

上述搜索相关的内容可以简单组合起来做更精确的筛选，不过通常情况下很少会用到。

范例：market://search?q=lucky wheel pub:Zcw

#### AndFix

* AndFix github 地址

```
https://github.com/alibaba/AndFix
```
* AndFix 第三方工具地址 apkpatch

```
https://github.com/alibaba/AndFix/raw/master/tools/apkpatch-1.0.3.zip
```

* AndFix 命令

```
命令 : apkpatch.bat -f new.apk -t old.apk -o output1 -k debug.keystore -p android -a androiddebugkey -e android

-f <new.apk> ：新版本
-t <old.apk> : 旧版本
-o <output> ： 输出目录
-k <keystore>： 打包所用的keystore
-p <password>： keystore的密码
-a <alias>： keystore 用户别名
-e <alias password>： keystore 用户别名密码
```


