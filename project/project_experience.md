# Project Experience
* 关于触屏的问题
> 最小的触屏距离判断是否滑动

```
ViewConfigurationCompat.getScaledPagingTouchSlop(ViewConfiguration.get(getContext()))

触发移动事件的最短距离，如果小于这个距离就不触发移动控件，如viewpager就是用这个距离来判断用户是否翻页

```
[参考](2)

* 关于内存问题

> 变量的使用

```
HashMap : 尽量使用 WeakHashMap
List:尽量用 SparseArrayList
```
> context 和 view 内存释放问题 

```
	除了在Activity添加如下释放方法。更重要的是变量内部类和静态类要用弱了引用
	----------------------------------------------
	
	@Override
    protected void attachBaseContext(Context newBase) {
        super.attachBaseContext(new ContextWrapper(newBase) {
            @Override
            public Object getSystemService(String name) {

                if (Context.AUDIO_SERVICE.equals(name)){
                    return getApplicationContext().getSystemService(name);
                }

                return super.getSystemService(name);
            }
        });
    }
    ----------------------------------------------

```
[关于相关问题请参照](1)


* 关于studio 打包问题

```
Error:Execution failed for task ':app:transformClassesAndResourcesWithProguardForRelease'.
 java.io.IOException: Please correct the above warnings first.

```
> 解决方案
defaultConfig {
	multiDexEnabled true
}

* 判断手机是否root

```

	private final static int kSystemRootStateUnknow = -1;
    
    private final static int kSystemRootStateDisable = 0;
    
    private final static int kSystemRootStateEnable = 1;
    
    private static int systemRootState = kSystemRootStateUnknow;

    public static boolean isRootSystem() {
        if (systemRootState == kSystemRootStateEnable) {
            return true;
        } else if (systemRootState == kSystemRootStateDisable) {

            return false;
        }
        File f = null;
        final String kSuSearchPaths[] = {"/system/bin/", "/system/xbin/", "/system/sbin/", "/sbin/", "/vendor/bin/"};
        try {
            for (int i = 0; i < kSuSearchPaths.length; i++) {
                f = new File(kSuSearchPaths[i] + "su");
                if (f != null && f.exists()) {
                    systemRootState = kSystemRootStateEnable;
                    return true;
                }
            }
        } catch (Exception e) {
        }
        systemRootState = kSystemRootStateDisable;
        return false;
    }
    }
    
```
> gradle 一致卡在那里编译

```
原因某个链接连不上，这个是主要原因
 ./gradlew build --debug
到项目目录下，用上述命令，去排查下
```

[1]:http://www.jianshu.com/p/c49f778e7acf
[2]:http://www.jcodecraeer.com/a/anzhuokaifa/androidkaifa/2013/0225/907.html