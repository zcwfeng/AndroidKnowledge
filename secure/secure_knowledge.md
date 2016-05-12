#Secure Knowledge

[1]:http://antukh.com/blog/2015/01/19/malware-techniques-cheat-sheet/


* 关于人物和自己用英文自我介绍
> 亚历山大 

```
亚历山大是一个充满激情的安全专家超过6年(正式),总是期待原始挑战和学习新东西的机会。他是一个防御莫斯科集团的创始人和现任领导人OWASP俄罗斯当地的章。他的特殊兴趣领域的应用密码学和所谓的“道德黑客”。
```

>  Alexander
 
[Alexander,亚历山大](http://antukh.com/blog/2015/01/19/malware-techniques-cheat-sheet/
) 

```
Alexander is a passionate Security Expert for over 6 years (formally), always looking towards original challenges and opportunities to learn something new. He is a founder of Defcon Moscow group and current leader of OWASP Russia Local Chapter. His special interest is in the field of applied cryptography and in what is called “ethical hacking”. 
```


> 关于Instruct 公司 __白盒代码保护__  __白盒签名保护__


1. 注册 [whiteCryption](http://www.whitecryption.com/)
2. 注册好了只好填写定制加密的选项，这个要靠经验，一般RSA AES DES 即可，收费的啊，真心贵
3. 然后就是到相应界面下载，他的GUI 工具。主要就是，SCP（ios） ，SKB （ios），JCP （JAVA）
4. 只要能看懂所有英文文档，那么解决起来相对容易。
5. SCP 一套 程序代码保护加固的白盒机制
6. SKB 一套 保护你的秘钥的机制。需要自己填写定制，自己写代码，进行加解密的操作规则
7. JCP java 代码保护方案，将你的java代码通过一定的机制转换成C/C++代码，打包后就是so，可以用Gradle 和 Ant 脚本配置。这样被逆向分析看到的只有so库和加密的库文件。逆向分析只能看到汇编代码
8. 此解决方案就是，将代码so加固，将java代码转换成so，将签名秘钥包装成skb的加密机制。即使当前代码被破解，重新执行SKB 打包，之前的SKB加密秘钥失效，保证了安全（本人认为加固的机制已经很不错，没做过黑客，不懂这里面的玄机）




> 有意思的特殊字符
> 
> <font face="黑体" color=#0099ff>0xAA</font>
> 
> <font face="黑体" color=#0099ff>0x55</font>
 