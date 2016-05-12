#Glide 使用

_<font color=#ff0000>前言：要解决的问题</font>_

*Android 在处理图片工作的时候显得有点娘，因为它会以像素形式加载图片到内存中去，一张照片平均普通的手机摄像头尺寸是 2592x193 像素（5百万像素）将大约会分配 19MB 内存。对于复杂的网络情况，缓存和图片处理，如果你用了一个测试完善开发完成的库，如 Glide，你会省下大量的时间，还不会让你头疼！*

___ Glide，就像 Picasso，可以从多个源去加载和显示图片，同时也兼顾缓存和在做图片处理的时候维持一个低内存消耗。它已经在 Google 官方 APP （如 Google 2015开发者大会的应用程序）中使用了，就和 Picasso 一样受欢迎。在这个系列中，我们要探讨 Glide 和 Picasso 的不同和优势。___


* 添加 Glide [_参考地址_](http://mrfu.me/2016/02/27/Glide_Getting_Started/)
> gradle,版本有可能更新，到官网查

```
compile 'com.github.bumptech.glide:glide:3.6.1'

```
> maven

```
<dependency>
<groupId>com.github.bumptech.glide</groupId>
<artifactId>glide</artifactId>
<version>3.6.1</version>
<type>aar</type>
</dependency>

```
* Glide不仅能从一个网络 URL 中加载， 也能从 Android 资源，文件和 Uri 中加载图片* 
[_参考地址_](http://mrfu.me/2016/02/27/Glide_Advanced_Loading/) 实例代码我会在我的后期项目尽快公布

···

当你上下滚动很多次，你会看到图片显示的之前的快的多。在比较新的手机上，这甚至都不需要时间去等。你可以会猜测，这些图片可能是来自缓存，而不再是从网络中请求。Glide 的缓存实现是基于 Picasso，这对你来说会更加全面的而且做很多事情会更加容易。缓存实现的大小是依赖于设备的磁盘大小。

当加载图片时，Glide 使用3个来源：内存，磁盘和网络（从最快到最慢排序）。再说一次，这里你不需要做任何事情。Glide 帮你隐藏了所有复杂的情况，同时为你创建了一个智能的缓存大小。我们将在以后的博客中去了解这块缓存知识。

···
* 