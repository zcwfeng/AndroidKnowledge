# android third platform

> #### 需要跳转到qq进行qq咨询，可以从第三方应用跳转到QQ界面，并可以进入指定的QQ号码的聊天界面（可以是陌生人的QQ号）.


```
final String qqUrl = "mqqwpa://im/chat?chat_type=wpa&uin=100000&version=1";  
findViewById(R.id.ll_online_qq).setOnClickListener(new View.OnClickListener() {  
    @Override  
    public void onClick(View v) {  
        startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(qqUrl)));  
    }  
});

```
> #### 隐藏支付宝标签，返回时候默认会支付失败，隐藏返回按钮，抓包利用Jquery 活Js语法

```

// Test If Can hidden alipay back button
if(url != null && url.contains("wappaygw.alipay.com")){
    webView.loadUrl("javascript:$('.am-header a').remove(0)");
}
```


Title: React 开源组件积累

Date: 2016-08-29 14:02

Category: android

Tags: pelican, publishing
     
Slug: android_third_platform

Author: zcwfeng

Summary: third platform