#git 技巧

> base

* demo

```
1.创建本地分支
git branch 分支名，例如：git branch 2.0.1.20120806
注：2.0.1.20120806是分支名称，可以随便定义。

2.切换本地分支
git checkout 分支名，例如从master切换到分支：git checkout 2.0.1.20120806

3.远程分支就是本地分支push到服务器上。比如master就是一个最典型的远程分支（默认）。
git push origin 2.0.1.20120806

4.远程分支和本地分支需要区分好，所以，在从服务器上拉取特定分支的时候，需要指定远程分支的名字。
git checkout --track origin/2.0.1.20120806
注意该命令由于带有--track参数，所以要求git1.6.4以上！这样git会自动切换到分支。

5.提交分支数据到远程服务器
git push origin <local_branch_name>:<remote_branch_name>
例如：
git push origin 2.0.1.20120806:2.0.1.20120806
一般当前如果不在该分支时，使用这种方式提交。如果当前在 2.0.1.20120806 分支下，也可以直接提交
git push

6.删除远程分支
git push origin :develop

```


* 

> 项目管理


* 如何只克隆git仓库中的一个分支？git clone -b <branch> <remote_repo> 


* 

> 问题解决

* demo

* 

> git clone只能clone远程库的master分支，无法clone所有分支，解决办法如下：

1. 找一个干净目录，假设是git_work
2. cd git_work
3. git clone http://myrepo.xxx.com/project/.git ,这样在git_work目录下得到一个project子目录
4. cd project
5. git branch -a，列出所有分支名称如下：
remotes/origin/dev
remotes/origin/release
6. git checkout -b dev origin/dev，作用是checkout远程的dev分支，在本地起名为dev分支，并切换到本地的dev分支
7. git checkout -b release origin/release，作用参见上一步解释
8. git checkout dev，切换回dev分支，并开始开发。


------

> 显示某个文件的历史更改信息

```
git blame filename.c 显示文件的每一行是在那个版本最后修改。



git whatchanged charge.lua 显示某个文件的每个版本提交信息：提交日期，提交人员，版本号，提交备注（没有修改细节）



git show 7aee80cd2afe3202143f379ec671917bc86f9771 显示某个版本的修改详情

和

git log -p 7aee80cd2afe3202143f379ec671917bc86f9771 

git log --pretty=oneline  显示每个版本都修改了那些文件

git log --pretty=oneline  charge.lua 与上一样，不过每个修改版本都包含了
git show 5aa1be6674ecf6c36a579521708bf6e5efb6795f charge.lua  显示某个版本的某个文件修改情况
```

------


