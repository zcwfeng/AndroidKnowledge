#android Material 学习探究
* 一 
 
 > AppBarLayout
 
 ```
 
 ```
 
 > CollapsingToolbarLayout
 
 ```
 1. Collapsing title：ToolBar的标题，当CollapsingToolbarLayout全屏没有折叠时，title显示的是大字体，在折叠的过程中，title不断变小到一定大小的效果。你可以调用setTitle(CharSequence)方法设置title。

 2. Content scrim：ToolBar被折叠到顶部固定时候的背景，你可以调用setContentScrim(Drawable)方法改变背景或者 在属性中使用 app:contentScrim=?attr/colorPrimary来改变背景。

 3. Status bar scrim：状态栏的背景，调用方法setStatusBarScrim(Drawable)。还没研究明白，不过这个只能在Android5.0以上系统有效果。

 4. Parallax scrolling children：CollapsingToolbarLayout滑动时，子视图的视觉差，可以通过属性app:layout_collapseParallaxMultiplier=0.6改变。
 
 5. CollapseMode ：子视图的折叠模式，有两种“pin”：固定模式，在折叠的时候最后固定在顶端；“parallax”：视差模式，在折叠的时候会有个视差折叠的效果。我们可以在布局中使用属性app:layout_collapseMode=parallax来改变。
 ```
 
### 总结
 
```
CollapsingToolbarLayout主要是提供一个可折叠的Toolbar容器，对容器中的不同视图设置layout_collapseMode折叠模式，来达到不同的折叠效果。
 
1.Toolbar 的高度layout_height必须固定，不能 “wrap_content”，否则Toolbar不会滑动，也没有折叠效果。
2.为了能让FloatingActionButton也能折叠且消失出现，我们必须给FAB设置锚点属性
```
 
* 二
* 三
* 四
* 五
* 六
* 七
* 八
* 九
* 十