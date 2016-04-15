# Project Experience
* 关于内存问题

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

[1]:http://www.jianshu.com/p/c49f778e7acf