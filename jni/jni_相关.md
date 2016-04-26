#JNI 相关
> 编译的步骤
###as 上面编译


* 首先配置 build.gradle

```

defaultConfig {        
。。。
        ndk{
            moduleName "ZcwfengJniLibName"         //生成的so名字
            abiFilters "armeabi", "armeabi-v7a", "x86"  //输出指定三种abi体系结构下的so库。目前可有可无。
        }
    }
===============
    
sourceSets {
        main {
            jniLibs.srcDirs = ['libs']// so
        }
    }
    
===============
###local.properties 文件
sdk.dir=D\:\\AndroidStdioSDK\\sdk

ndk.dir=D\:\\AndroidStdioSDK\\android-ndk-r10d-64bit
    
    
```
* 编写代码

```
public class NdkJniUtils {

    public native String getCLanguageString();
}

承载测试的Activity


public class NDKDemoActivity extends BaseActivity {

    static {
        System.loadLibrary("ZcwfengJniLibName");   //defaultConfig.ndk.moduleName
    }

    private TextView mTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_ndk_demo);
        mTextView = (TextView) this.findViewById(R.id.test);
        NdkJniUtils jni = new NdkJniUtils();
        mTextView.setText(jni.getCLanguageString());
    }

    public static void launch(Context from) {
        Intent intent = new Intent(from, NDKDemoActivity.class);
        from.startActivity(intent);

    }
}
```

* 编译

```

NDKApplication\app\build\intermediates\classes\debug
xxxxx\debug> javah -jni com.zcwfeng.fastdev.ndk.NdkJniUtils

生成 h 头文件 ，在工程的main目录下新建一个名字为jni的目录，然后将刚才的 .h文件剪切过来。在jni目录下新建一个c文件，随意取名，我的叫jnitest.c 。然后编辑代码
```
> 记得一定要重新build工程才能找到classes临时文件夹

* 引入库文件内容

```
static {
        System.loadLibrary("ZcwfengJniLibName"); 
    }
```

[参考1](1)

[参考2](2)

[参考3](3)

[参考4](4)
### 生成SO库
> rebuild project 

```
NDKApplication\app\build\intermediates\ndk\debug\obj\local 
找到对应编译的SO包

```


[1]:http://blog.csdn.net/yanbober/article/details/45309049
[2]:http://blog.csdn.net/yanbober/article/details/45310365
[3]:http://blog.csdn.net/yanbober/article/details/45310589
[4]:http://blog.csdn.net/yanbober/article/details/51027520


