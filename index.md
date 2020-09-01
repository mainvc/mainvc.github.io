# python

## 基础知识及使用技巧

### python中文编码

解决办法是在文件头添加：

```python
# coding=utf-8
```

### 多行语句

我们使用斜杠(\)将一行的语句分为多行显示

```python
total = item_one + \
		item_two + \
		item_three
```

语句中包含[],{}或()括号就不需要使用多行连接符

```python
days = ['Monday','Tuesday','Wednesday',
'Thursday','Friday']
```

### 用户输入

使用input进行用户输入

```python
name = input("请输入您的姓名：")
print(name)
```

### 命令行参数

使用sys的sys.argv来获取命令行参数，如命令行为

```python
python test.py arg1 arg2 arg3
```

那么sys.argv为

```
['test.py', 'arg1', 'arg2', 'arg3']
```

## Anaconda & pycharm

使用Anaconda Prompt进行环境的切换，使用pycharm创建运行环境。

### Anaconda Prompt查看所有的运行环境

```python
conda info -e
```

### Anaconda Prompt激活某一个运行环境

```python
activate Aol
```

### 使用pycharm创建运行环境

setting–>project–>project interpreter

### 使用豆瓣加速pip安装

```python
pip install sklearn  -i http://pypi.douban.com/simple/ --trusted-host pypi.douban.com
```

## 网络编程和多任务

## 数据库

## django

## flask

## tornado

## scrapy

## 数据分析

## 机器学习

## 深度学习

## 经典库

## micropython



# vue

## 安装、创建项目、配置

```js
npm install -g @vue/cli
vue create hello-world
vue ui
```

### 使用pycharm开发

pycharm要使用专业版本，setting–>plugin中安装vue.js

## JS语法及HTML、CSS基础知识

## vue语法

## vue开发手机app

## vue开发桌面app

# 项目部署与微服务