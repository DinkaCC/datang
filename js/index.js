$(function () {
	//顶部轮播
    var mySwiper = new Swiper('.lunbo', {
        autoplay: 3000,//可选选项，自动滑动
        effect : 'fade',//淡入淡出
        loop: true,
        pagination: '.pagination',
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
    });
    //顶部轮播 鼠标移入与移除时暂停与开始轮播
	$(".swiper-container").on({
		mouseenter:function(){
			mySwiper.stopAutoplay();
		},
		mouseleave:function(){
			mySwiper.startAutoplay();
		},
	});
	
    //基地-动画
    $(".area-content a").hover(
		//进入动画
        function () {
            var div = $(this).find("div");
            div.animate(
                //数值
                {
                    top: "80px",
                    right: "80px"
                },
                //option参数集合速度
                //速度
                {
                    duration:500,
                    speciaEasing: {
                        top: "easeInOutCubic",
                        left: "easeInOutCubic"
                    }
                }
            )
        },
		//结束动画
        function () {
            var div = $(this).find("div");
            div.animate(
                //数值
                {
                    top: "160px",
                    right: "0"
                },
                //option参数集合速度
                //速度
                {
                    duration:300,
                    speciaEasing: {
                        top: "easeInOutBounce",
                        left: "easeInOutBounce"
                    }
                }
            )
        }
    )



//活动 ajax资讯
    ajaxFun(
        {
            typeCodes:[ "activity"],//活动
            limit:4  //显示4条
        },
        function (data) {
            $.each(data,function (index) {
                var a =
                '<a href="#" id="' + this.id + '">'
                    + '<img class = "f-left" src=' + this.smallImg
                    + '><div class="activitystatus">' + this.attr.activityStatus+'</div>'
                    + '<div class="f-left">'
                    + '<h3>' + this.title + '</h3>'
                    + '<p>活动时间：' + this.subTitle + '</p>'
                + '<p>活动地点：' + this.intro +'</p>'
                + '</div>'
                + '</a>';
                $(".active-content").append(a);
				var p = $(".active-content a");
				for(var i = 0; i < p.length; i++) {
					p[i].onclick = function () {
						sessionStorage.setItem("id", this.getAttribute("id"));
						location.href = "passage/passage-active.html";
					}
				};
            })
        }
    );

//项目 ajax
    ajaxFun(
        {
            typeCodes:[ "hlwms","hlwcy"] ,//互联网-民生 互联网-产业
            limit:5  //显示5条
        },
        function (data) {
            $.each(data, function () {
                var a =
                '<a class="swiper-slide" href="project.html">'
                +'<img src=' +hasHttp(this.middleImg)+'></a>';
                $(".project-swiper .swiper-wrapper").append(a);
            })
			
			//四个图一起播 获得ajax数据后 才能轮播
				var objectCarousel = new Swiper('.project .swiper-container', {
					autoplay: 3000,//可选选项，自动滑动
					loop: true,//循环
					slidesPerView : 4,//轮播区域需要显示的slide数量
					spaceBetween : 20,//每个slide之间的空隙px
					autoplayDisableOnInteraction: false,//交互（拖拽）之后是否停止轮播
				});
				//轮播左右切换
				$(".arrow-left").on("click",function(){
					objectCarousel.swipePrev();
				});
				$(".arrow-right").on("click",function(){
					objectCarousel.swipeNext();
				});
        }
    );
	
})

// 资讯 ajax数据
    ajaxFun(
        {
            typeCodes:[ "information","mediaReport"], //公司资讯 媒体报道
            limit:3  //显示3条
        },
        function (data) {
            $.each(data,function (index) {
				$(".news-box")[index].id = this.id;
                $(".news-content img")[index].src = hasHttp(this.smallImg);
                $(".news-content a")[index].id = this.id;
                $(".news-content .news-img p a")[index].innerHTML = this.title;
                $(".news-content>p a")[index].innerHTML = this.intro;
            })
			var p = $(".news-box");//获得标题
			var a = $(".news-box a");//获得链接
			for(var i = 0; i < p.length; i++) {
				//点击标题
				p[i].onclick = function () {
					console.log(this)
					sessionStorage.setItem("id", this.getAttribute("id"));
					location.href = "passage/passage-news.html";
				}
				//点击链接
				a[i].onclick = function () {
					sessionStorage.setItem("id", this.getAttribute("id"));
					location.href = "passage/passage-news.html";
				}
			};
        }
		
    );