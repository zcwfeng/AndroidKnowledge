
# Plugin （基本环境不解释，不懂去搜）
[参考此组织](1)

### Android Studio 插件
* Plant UML -> Graphviz

```
lant UML setup in Android Studio (Mac Maverics )
Steps: 
1- Install Graphviz.dmg.
你可以用brew install graphviz 代替上个文件安装方式
2- Add android studio plugin PlantUML
       Preference - > plugins -> Plant UML
3- Setup environment variable (By Running below Command) -

launchctl setenv GRAPHVIZ_DOT /usr/local/bin/dot export GRAPHVIZ_DOT

4- In android studio - Click on View-> Plant Uml.
5- Click New-> Salt Wireframe -> paste the below lines in it (after erase all line )

@startuml
testDot
@enduml
6- Set the path of Graphviz app in Android studio settings.
click Preference-> Other settings-> Plant UML -> Graph Viz Executable Path

/usr/local/bin/dot

7- you will find the below image in PlantUML window.
```
[参考](2)
### Android编写代码插件
### 插件的架构

[1]:http://wequick.github.io/
[2]:http://manishpathak-mobile.blogspot.jp/2015/10/plant-uml-setup-in-android-studio-mac.html