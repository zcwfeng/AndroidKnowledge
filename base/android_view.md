#Android View
* 生命周期
* 布局的扩展与使用技巧
	> onMessure 解决嵌套无法展开的问题
	
	第一种情况：最普遍的解决方案
	
	```
    
     @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        int expandSpec = MeasureSpec.makeMeasureSpec(Integer.MAX_VALUE >> 2,
                MeasureSpec.AT_MOST);
        super.onMeasure(widthMeasureSpec, expandSpec);
    }
    ```
    
    第二种情况：ViewPager的展开问题，重写ViewPager
    
    ```
    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
		int height = 0;
        //下面遍历所有child的高度
        for (int i = 0; i < getChildCount(); i++) {
            View child = getChildAt(i);
            child.measure(widthMeasureSpec,
                    MeasureSpec.makeMeasureSpec(0, MeasureSpec.UNSPECIFIED));
            int h = child.getMeasuredHeight();
            if (h > height) //采用最大的view的高度。
                height = h;
        }
        heightMeasureSpec = MeasureSpec.makeMeasureSpec(height,
                MeasureSpec.EXACTLY);
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);


    }

    ```
* View 的基本操作描述
	> View为所有图形的基类，viewgroup对view继承扩展为视图的容器类。
View定义了绘图的基本操作：三个函数messure(),layout(),draw(),其内部分别包括了onMessure(),onLayout(),onDraw()三个字方法s
messure 计算视图的大小，宽高在view中定义为final类型，子类视图大小操作在onMessure()中
layout操作视图在屏幕中的位置，也定义为final类型layout() 基本操作setFrame（l,t,r,b） 子视图在父视图中的位置;onLayout()函数用在ViewGroup布局子视图时候用。 
 
	```
	draw操作，内部定制了操作
	（1）绘制背景
	（2）如果显示渐变框再次做准备操作（根据需要绘制）
	（3）绘制本身和绘制子视图
	（4）绘制滚动条
		PS: 一般重写控件 重写onMessure() 和 onDraw()
	（5）getX()表示控件相对自身左上角的坐标 getRawX()表示相对屏幕左上角的坐标
	
	```
