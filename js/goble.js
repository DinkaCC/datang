
$(function () {
    var btnTop=$(".return-btn");//获取返回顶部的div
    btnTop.hide();//返回顶部的div 默认隐藏

    //顶部导航切换样式
    $(".header-nav li").on("click",function () {
        $(this).find("a").addClass("active-text");
        $(this).siblings().find("a").removeClass("active-text");
    })

    //service-nav 切换选中样式
    $(".service-nav li").on("click",function () {
        $(this).addClass("active-service").siblings().removeClass("active-service");
    })

    //显示 返回顶部btn
    window.onscroll = function(){
        var top = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
        if( top >= 300 ) { //当距离顶部超过300px时
            btnTop.slideDown(400);
        } else { //如果距离顶部小于300px
            btnTop.slideUp(400);
        }
    }
	//点击返回顶部
    btnTop.click(function(){
        $("html,body").animate(
            {
                scrollTop:"0"
            },400
        )
    })

    //点击基地 弹到基地
    $(".areali").on("click",function(){
        var a =$(".header-nav li:first a").attr("href");
        var aLink = a  + "#area";
        this.href = aLink;
    })
})

//    获得ajax数据
function ajaxFun(key,callback){
    $.ajax({
        type: "post",
        url: "/ylkj-api/c/article/grid",
        dataType: "json",
        data:key,
        success:function(data){
            callback(data.data);
        }
    })
}

//判断网址前缀
function hasHttp(url) {
    if (url.indexOf("www") == -1){
        var link = "http://115.182.107.203:8088" + url;
        return link;
    }else{
        return url;
    }
}

//同一div 下的 同一链接
function getStorage(){
	var div = $(".f-right");
	for (var i = 0; i < div.length; i++) {
		var h3 = div[i].getElementsByTagName("h3")[0];
		var aLink = div[i].getElementsByTagName("a")[1];
		h3.onclick = function () {
			var a = this.getElementsByTagName("a")[0];
			sessionStorage.setItem("id", a.getAttribute("idx"));
			location.href = "passage/passage-news.html";
		}
		aLink.onclick = function() {
			sessionStorage.setItem("id", this.getAttribute("idx"));
			location.href = "passage/passage-news.html";
		}
		
	}
}

//时间 xx-xx-xx 加0 
function month(time) {
	var mouth = ( time.getMonth() + 1 );
	var day = time.getDate();
	if( mouth < 10 ){
		mouth = "0" + mouth;
	}
	if( day < 10 ){
		day = "-0" + day;
	}else {
		day = "-" + day;
	}
	return mouth + day;
}

//ie-重置indexof
if (!Array.prototype.indexOf){  
        Array.prototype.indexOf = function(elt /*, from*/){  
        var len = this.length >>> 0;  
        var from = Number(arguments[1]) || 0;  
        from = (from < 0)  
             ? Math.ceil(from)  
             : Math.floor(from);  
        if (from < 0)  
          from += len;  
        for (; from < len; from++)  
        {  
          if (from in this &&  
              this[from] === elt)  
            return from;  
        }  
        return -1;  
      };  
    }  
