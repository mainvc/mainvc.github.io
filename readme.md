1.其中的文件2h.js、base.user.css、jquery.min.js、style.css是为了在网页端显示目录功能  
2.将base.user.css导入到typaro的偏好设置-外观-打开主题文件夹中  
3.在生成的html的header中加入  
```buildoutcfg
<script src="./jquery.min.js"></script>
<script src="./2h.js"></script>
<link rel="stylesheet" href="./style.css"></link>
```
4、具体设置图片等媒介需要对应设置typaro