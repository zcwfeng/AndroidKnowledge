#git 技巧

> ###base

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
* 查看你的Git全局设置信息

```

命令为：git config -l

```

* git 统计相关

```
统计贡献者代码量： git shortlog --numbered --author="zcw*"
统计总共提交的代码行数： git log --oneline | wc -l
查看每次提交的代码和相应文件：git log --stat
查看所有成员提交的代码量：git shortlog --numbered --s

```

* 

> ###项目管理


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

> ###显示某个文件的历史更改信息

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

> ###网上统计方案


```
统计某人的代码提交量，包括增加，删除：

git log --author="$(git config --get user.name)" --pretty=tformat: --numstat | gawk '{ add += $1 ; subs += $2 ; loc += $1 - $2 } END { printf "added lines: %s removed lines : %s total lines: %s\n",add,subs,loc }' -
仓库提交者排名前 5（如果看全部，去掉 head 管道即可）：

git log --pretty='%aN' | sort | uniq -c | sort -k1 -n -r | head -n 5
仓库提交者（邮箱）排名前 5：这个统计可能不会太准，因为很多人有不同的邮箱，但会使用相同的名字

git log --pretty=format:%ae | gawk -- '{ ++c[$0]; } END { for(cc in c) printf "%5d %s\n",c[cc],cc; }' | sort -u -n -r | head -n 5
贡献者统计：

git log --pretty='%aN' | sort -u | wc -l
提交数统计：

git log --oneline | wc -l
添加或修改的代码行数：

git log --stat|perl -ne 'END { print $c } $c += $1 if /(\d+) insertions/;

git log 参数说明：

--author   指定作者

--stat   显示每次更新的文件修改统计信息，会列出具体文件列表

--shortstat    统计每个commit 的文件修改行数，包括增加，删除，但不列出文件列表：  

--numstat   统计每个commit 的文件修改行数，包括增加，删除，并列出文件列表：

-p 选项展开显示每次提交的内容差异，用 -2 则仅显示最近的两次更新

例如：git log -p  -2

--name-only 仅在提交信息后显示已修改的文件清单

--name-status 显示新增、修改、删除的文件清单

--abbrev-commit 仅显示 SHA-1 的前几个字符，而非所有的 40 个字符

--relative-date 使用较短的相对时间显示（比如，“2 weeks ago”）

--graph 显示 ASCII 图形表示的分支合并历史

--pretty 使用其他格式显示历史提交信息。可用的选项包括 oneline，short，full，fuller 和 format（后跟指定格式）

例如： git log --pretty=oneline ; git log --pretty=short ; git log --pretty=full ; git log --pretty=fuller

--pretty=tformat:   可以定制要显示的记录格式，这样的输出便于后期编程提取分析

例如：git log --pretty=format:""%h - %an, %ar : %s""

下面列出了常用的格式占位符写法及其代表的意义。                   

选项       说明                  

%H      提交对象（commit）的完整哈希字串               

%h      提交对象的简短哈希字串               

%T      树对象（tree）的完整哈希字串                   

%t      树对象的简短哈希字串                    

%P      父对象（parent）的完整哈希字串               

%p      父对象的简短哈希字串                   

%an     作者（author）的名字              

%ae     作者的电子邮件地址                

%ad     作者修订日期（可以用 -date= 选项定制格式）                   

%ar     作者修订日期，按多久以前的方式显示                    

%cn     提交者(committer)的名字                

%ce     提交者的电子邮件地址                    

%cd     提交日期                

%cr     提交日期，按多久以前的方式显示              

%s      提交说明  

--since  限制显示输出的范围，

例如： git log --since=2.weeks    显示最近两周的提交

选项 说明                

-(n)    仅显示最近的 n 条提交                    

--since, --after 仅显示指定时间之后的提交。                    

--until, --before 仅显示指定时间之前的提交。                  

--author 仅显示指定作者相关的提交。                

--committer 仅显示指定提交者相关的提交。

一些例子： git log --until=1.minute.ago // 一分钟之前的所有 log git log --since=1.day.ago //一天之内的log git log --since=1.hour.ago //一个小时之内的 log git log --since=`.month.ago --until=2.weeks.ago //一个月之前到半个月之前的log git

log --since ==2013-08.01 --until=2013-09-07 //某个时间段的 log   git blame

看看某一个文件的相关历史记录

例如：git blame index.html --date short



```


