#AIDL 使用
* 使用场景

```
“只有当你允许来自不同的客户端访问你的服务并且需要处理多线程问题时你才必须使用AIDL”，其他情况下你都可以选择其他方法，如使用Messager，也能跨进程通讯。可见AIDL是处理多线程、多客户端并发访问的。而Messager是单线程处理
```