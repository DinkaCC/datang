
$(function () {

    //活动ajax
    ajaxFun(
        {
            typeCodes:[ "activity"],
            limit:2000
        },
        function (data) {
            $.each(data,function (index,value) {
                htmlLi(value);
                //进入活动文章页面
				var p = $(".active_box li a");
				for(var i = 0; i < p.length; i++) {
					p[i].onclick = function () {
						sessionStorage.setItem("id", this.getAttribute("id"));
						location.href = "passage/passage-active.html";
					}
				};
            })
        }
    );
    //选择活动状态
    $(".choose-active select").on("change",function () {
        $(".active_box").empty();
        var chooseTxt = $(this).find("option:selected").text();
        ajaxFun(
            {
                typeCodes:[ "activity"],
                limit:2000
            },
            function (data) {
                $.each(data,function (index,value) {
                    //单选改变
                    if(chooseTxt == "未开始" && value.attr.activityStatus == "未开始"){
                        htmlLi(value);
                    }else if(chooseTxt == "正在开始" && value.attr.activityStatus == "进行中"){
                        htmlLi(value);
                    }else if(chooseTxt == "已经结束" && value.attr.activityStatus == "已结束"){
                        htmlLi(value);
                    }else if(chooseTxt == "所有活动") {
                        htmlLi(value);
                    }
                })
            }
        );

    })
    //写入页面
    function htmlLi(obj) {
        var  aa=
            '<li>'+
            '<a href="#" id="' + obj.id + '">'+
            '<img src='+hasHttp(obj.smallImg)+'>'+
            '<p>'+obj.attr.activityStatus+'</p>'+
            '<h3>'+obj.title+'</h3>'+
            '<h4>活动时间：'+obj.subTitle+'</h4>'+
            '<h4>活动地点：'+obj.intro+'</h4>'+
            '</a>'+
            '</li>';
        $(".active_box").append(aa);
    }
})
