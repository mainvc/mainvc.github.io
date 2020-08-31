//标题序号计数器
var hCount = [0, 0, 0, 0, 0, 0];
//设置计数器
function setHCount(number) {
    //当前计数器加一
    hCount[number - 1]++;
    for (var i = number, length = hCount.length; i < length; i++) {
        //子目录计数器全部置零
        hCount[i] = 0;
    }
}
//重命名目录名称
function setHTagValue(item, number) {
    //获取标题名
    var text = $(item).get(0).innerHTML;
    //初始化空字符串
    var before = "";
    //生成序号
    for (var i = 1, length = hCount.length; i < number; i++) {
        if (i < number - 1)
            before += hCount[i] + ".";
        else
            before += hCount[i] + " ";
    }
    //在标题前面加上序号
    $(item).get(0).innerHTML = before + text;
}
function renameHTag(item) {
    var tag = $(item).get(0).localName;
    if (tag === "h1") {
        setHCount(1);
        //console\.log("捕获到标签:%s", tag);
        setHTagValue(item, 1);
    }
    if (tag === "h2") {
        setHCount(2);
        //console.log("捕获到标签:%s", tag);
        setHTagValue(item, 2);
    }
    if (tag === "h3") {
        setHCount(3);
        //console.log("捕获到标签:%s", tag);
        setHTagValue(item, 3);
    }
    if (tag === "h4") {
        setHCount(4);
        //console.log("捕获到标签:%s", tag);
        setHTagValue(item, 4);
    }
    if (tag === "h5") {
        setHCount(5);
        //console.log("捕获到标签:%s", tag);
        setHTagValue(item, 5);
    }
    if (tag === "h6") {
        setHCount(6);
        //console.log("捕获到标签:%s", tag);
        setHTagValue(item, 6)
    }
}

//是否显示导航栏
 var showNavBar = true;
 //是否展开导航栏
 var expandNavBar = true;

 $(document).ready(function(){
    var h1s = $("body").find("h1");
    var h2s = $("body").find("h2");
    var h3s = $("body").find("h3");
    var h4s = $("body").find("h4");
    var h5s = $("body").find("h5");
    var h6s = $("body").find("h6");

   var links = document.links;
   for (var i = 0; i < links.length; i++) {
    if (!links[i].target) {
        if (
            links[i].hostname !== window.location.hostname ||
            /\.(?!html?)([a-z]{0,3}|[a-zt]{0,4})$/.test(links[i].pathname)
        ) {
            links[i].target = '_blank';
            }
        }
    }

    var headCounts = [h1s.length, h2s.length, h3s.length, h4s.length, h5s.length, h6s.length];
    var vH1Tag = null;
    var vH2Tag = null;
    var vH3Tag = null;
    var vH4Tag = null;
    var vH5Tag = null;
    var vH6Tag = null;
    for(var i = 0; i < headCounts.length; i++){
        if(headCounts[i] > 0){
            if(vH1Tag == null){
                vH1Tag = 'h' + (i + 1);
            }else if (vH2Tag == null){
                vH2Tag = 'h' + (i + 1);
            }else if (vH3Tag == null){
                vH3Tag = 'h' + (i + 1);
            }else if (vH4Tag == null){
                vH4Tag = 'h' + (i + 1);
            }else if (vH5Tag == null){
                vH5Tag = 'h' + (i + 1);
            }else {
                vH6Tag = 'h' + (i + 1);
            }
        }
    }
    if(vH1Tag == null){
        return;
    }

    $("body").prepend('<div class="BlogAnchor">' +

        //'<p class="html_header">' +
        //    '<span></span>' +
        //'</p>' +
        '<div class="AnchorContent" id="AnchorContent"> </div>' +
    '</div>' );

    var vH1Index = 0;
    var vH2Index = 0;
    var vH3Index = 0;
    var vH4Index = 0;
    var vH5Index = 0;
    var vH6Index = 0;
    $("body").find("h1,h2,h3,h4,h5,h6").each(function(i,item){
        //给<H>类标签编号
        renameHTag(item);

        var id = '';
        var name = '';
        var tag = $(item).get(0).tagName.toLowerCase();
        var className = '';

        if(tag == vH1Tag){
            id = name = ++vH1Index;
            name = id;
            vH2Index = 0;
            className = 'item_h1';
        }else if(tag == vH2Tag){
            id = vH1Index + '_' + ++vH2Index;
            name = vH1Index + '.' + vH2Index;
            className = 'item_h2';
        }else if(tag == vH3Tag){
            id = vH1Index + '_' + vH2Index + '_' + ++vH3Index;
            name = vH1Index + '.' + vH2Index + '.' + vH3Index;
            className = 'item_h3';
        }else if(tag == vH4Tag){
            id = vH1Index + '_' + vH2Index + '_' + vH3Index + '_' + ++vH4Index;
            name = vH1Index + '.' + vH2Index + '.' + vH3Index + '.' + vH4Index;
            className = 'item_h4';
        }else if(tag == vH5Tag){
            id = vH1Index + '_' + vH2Index + '_' + vH3Index + '_' + vH4Index + '_' + ++vH5Index;
            name = vH1Index + '.' + vH2Index + '.' + vH3Index + '.' + vH4Index + '.' + vH5Index;
            className = 'item_h4';
        }else if(tag == vH6Tag){
            id = vH1Index + '_' + vH2Index + '_' + vH3Index + '_' + vH4Index + vH5Index + '_' + ++vH6Index;
            name = vH1Index + '.' + vH2Index + '.' + vH3Index + '.' + vH4Index + vH5Index + '.' + vH6Index;
            className = 'item_h6';
        }

        //只有h1和h4拿到了id,h2、h3都没拿到
        //console.log("所有id",id)
        $(item).attr("id","wow"+id);
        $(item).addClass("wow_head");
        $("#AnchorContent").css('max-height', ($(window).height() - 80) + 'px');
        $("#AnchorContent").append('<li><a class="nav_item '+ ' new' + tag + ' ' + className+' anchor-link" onclick="return false;" href="#" link="#wow'+id+'">'+""+""+$(this).text()+'</a></li>');
		$(".newh1").css("margin-left", 0);
		$(".newh2").css("margin-left", 10);
		$(".newh3").css("margin-left", 20);
		$(".newh4").css("margin-left", 55);
		$(".newh5").css("margin-left", 80);
		$(".newh6").css("margin-left", 100);
    });


    $(".anchor-link").click(function(){
        $("html,body").animate({scrollTop: $($(this).attr("link")).offset().top}, 500);
    });

    var headerNavs = $(".BlogAnchor li .nav_item");
    var headerTops = [];
    $(".wow_head").each(function(i, n){
        headerTops.push($(n).offset().top);
    });
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        $.each(headerTops, function(i, n){
            var distance = n - scrollTop;
            if(distance >= 0){
                $(".BlogAnchor li .nav_item.current").removeClass('current');
                $(headerNavs[i]).addClass('current');
                return false;
            }
        });
    });

    if(!showNavBar){
        $('.BlogAnchor').hide();
    }
    if(!expandNavBar){
        $(this).html("目录▼");
        $(this).attr({"title":"展开"});
        $("#AnchorContent").hide();
    }
 });


 $(window).resize(function() {
  $("#AnchorContent").css('max-height', ($(window).height() - 80) + 'px');
});


//插入title的ico图标
var ico_link = "<link rel=icon type=image/png sizes=32x32 href=2html/ico.png>";
$("head").prepend(ico_link);