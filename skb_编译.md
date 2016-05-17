# SKB 编译

* 到 SKB 下的目录 选择不同平台的包，用MK脚本进行编译成SO
* libSecureKeyBox.a
* libSkbPlatform.a
* libSQLite.a
* 以上三个文件不同平台进行替换
* MK 脚本


```
Application.mk

APP_ABI := x86
#APP_ABI := x86 x86_64 arm64-v8a mips armeabi-v7a armeabi 
APP_STL := stlport_static

```


```
Android.mk

LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)
LOCAL_MODULE    := static1
LOCAL_SRC_FILES := libSecureKeyBox.a
include $(PREBUILT_STATIC_LIBRARY) 

include $(CLEAR_VARS)
LOCAL_MODULE    := static2
LOCAL_SRC_FILES := libSkbPlatform.a
include $(PREBUILT_STATIC_LIBRARY) 


include $(CLEAR_VARS)
LOCAL_MODULE    := static3
LOCAL_SRC_FILES := libSQLite.a
include $(PREBUILT_STATIC_LIBRARY)

include $(CLEAR_VARS)
LOCAL_MODULE    := authenticate
LOCAL_SRC_FILES := authenticate.cpp
LOCAL_LDFLAGS   := -llog
LOCAL_C_INCLUDES := $(LOCAL_PATH)/include
LOCAL_STATIC_LIBRARIES := static1 static3
LOCAL_WHOLE_STATIC_LIBRARIES := static2 


include $(BUILD_SHARED_LIBRARY)

```