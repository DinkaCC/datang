
$(function () {
    //服务信息动画
	var aniDiv = $(".content-service .box>div");
    aniDiv.hover(function () {
        $(this).find(".text").animate(
            {
                left:0
            },
            {
                duration:300,
            }
        );
    },
    function () {
        $(this).find(".text").animate(
            {
                left:"380px"
            },
            {
                duration:100,
            }
        );
    });
    aniDiv.mouseleave(function () {
        $(this).find(".text").animate(
            {
                left:"-380px"
            },
            {
                duration:1,
            }
        );
    })
	
//产业服务 ajax
    ajaxFun(
        {
            typeCodes:[ "cyfw"],
            limit:2000
        },
        function (data) {
            $.each(data, function () {
                var li =
                    '<li id="' +this.id+ '">'+
                    '<a href="#">' +
                    '<img src='+hasHttp(this.smallImg)+'>'+
                    '<div class="vc-text">'+
                    '<h3>'+this.title+'</h3>'+
                    '<h4>'+this.subTitle+'</h4>'+
                    '</div>'+
                    '</a>'+
                    '</li>';
                $(".vc-box ul").append(li);
				var p = $(".vc-box ul li");
				for(var i = 0; i < p.length; i++) {
					p[i].onclick = function () {
						sessionStorage.setItem("id", this.getAttribute("id"));
						location.href = "../passage/passage-service.html";
					}
				};
            })
        })

})
