#Android_Permition
* 最新版本权限问题

> android 6.0 权限限制问题，部分权限必须现请求一下权限才能用

参考地址[相关文章]

[相关文章]:http://www.cnblogs.com/cr330326/p/5181283.html


```
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        // 业务操作，AppCompatActivity 里面的灰调函数，根据结果过滤请求处理和权限
    }

==================如：请求权限封装==================

	public void requestREAD_EXTERNAL_STORAGEPermissions() {
        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.READ_EXTERNAL_STORAGE) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, PERMISSIONS_EXTERNAL, REQUEST_EXTERNAL);
        } else {
            onGetEXTERNALPermissions();
        }
    }
    
	public void requestRECORD_AUDIOPermissions() {
        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.RECORD_AUDIO}, REQUEST_RECORD_AUDIO);
        } else {
            onGetRECORD_AUDIOPermissions();
        }
    }

    public void requestCAMERAPermissions() {
        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.CAMERA}, REQUEST_EXTERNAL);
        } else {
            onGetCAMERAPermissions();
        }
    }

    public void requestREAD_PHONE_STATEPermissions() {
        if (ActivityCompat.checkSelfPermission(this, Manifest.permission.READ_PHONE_STATE) != PackageManager.PERMISSION_GRANTED) {
            ActivityCompat.requestPermissions(this, new String[]{Manifest.permission.READ_PHONE_STATE}, REQUEST_PHONE_STATE);
        } else {
            onGetREAD_PHONE_STATEPermissions();
        }
    }
==================end==================

* 具体如何用：你的Activity ，封装成你的BaseActivity 或者在自定义Config配置

==================DEMO================
 	
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.requestCAMERAPermissions();

        setContentView(R.layout.shotscreen_selectpic_layout);
        initView();
        initPic();
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
    }
=================END=====================    

```
