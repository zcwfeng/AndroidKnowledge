#Android Video
* 录屏相关
> 命令：android 4.4 以上录制视频命令

```
adb shell screenrecord --bit-rate 99999999 /sdcard/test.mp4
```
>  防止录屏 。[root参见](1)

```
一般Video使用VideoView 继承自 SurfaceView ，所以在VideoView 里面添加如下代码：
if (Build.VERSION.SDK_INT > Build.VERSION_CODES.JELLY_BEAN_MR1) {
            video_view.setSecure(true);
        }
如果是root 过的手机，判断是否root，然后在做逻辑操作

```
[1]:https://github.com/zcwfeng/AndroidKnowledge/master/project
