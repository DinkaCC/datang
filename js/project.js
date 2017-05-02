$(function () {
    //项目切换tan
    $(".nav-title li").on("click",function () {
        $(this).addClass("active-text").siblings().removeClass("active-text");
        $($("#tab ul")[$(this).index()]).show().siblings().hide();
    })

// 互联网-产业 ajax
    ajaxFun(
        {
            typeCodes:[ "hlwcy"],
            limit:2000
        },
        function (data) {
            $.each(data, function (index) {
				var li =
				'<li><a href='+ hasHttp(this.url) +' class="f-left">'
				+'<img src=' + hasHttp(this.smallImg)+ '></a>'
				+'<div class="f-right">'
				+'<h3>项目名称：'+this.title
				+'<br></h3>'
				+'<p><b>项目简介：</b><span><span>'+ this.intro
				+'</span></span></p></div></li>';
				$("#industry").append(li);
            })
        }
    );

// 互联网-民生 ajax
    ajaxFun(
        {
            typeCodes:[ "hlwms"],
            limit:2000
        },
        function (data) {
            $.each(data, function () {
                var li =
                '<li><a href="#" class="f-left">'
                +'<img src=' + hasHttp(this.smallImg) +'></a>'
                +'<div class="f-right">'
                +'<h3>项目名称：'+this.title
                +'<br>公司名称： '+ this.subTitle
                + '</h3>'
                +'<p><b>项目简介：</b><span><span>'+ this.intro
                +'</span></span></p></div></li>';
                $("#people").append(li)
            }
			
			)
        }
    );
})

