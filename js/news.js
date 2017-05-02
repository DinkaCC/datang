$(function () {
    //资讯导航切换
    $(".news-box .nav-title li").on("click",function () {
        $(this).addClass("active-text").siblings().removeClass("active-text");
        $($(".news-contain")[$(this).index()]).show().siblings().hide();
    })
    var monthMap = {
        1:"JAN",
        2:"FEB",
        3:"MAR",
        4:"APR",
        5:"MAY",
        6:"JUN",
        7:"JUL",
        8:"AUG",
        9:"SEP",
        10:"OCT",
        11:"NOV",
        12:"DEC"
    }
    //公司资讯
    ajaxFun(
        {
            typeCodes:[ "information"],
            limit:2000
        },
        function (data) {
            var str = [];
            var strY = [];
            $.each(data, function () {
                var time = new Date(this.publishTime);
				var time2 = time.getFullYear()+"-"+month(time);
				var mouth =  time.getMonth()+1;
				var year =  time.getFullYear();
                var html = '';
				if(strY.indexOf(year) == -1) {
					str = [];
					strY.push(year)
				}
                if (str.indexOf(mouth) == -1) {
                    // 加标题
                    html +=
                        '<h1>' + monthMap[mouth] + '</h1>';
                    str.push(mouth)
                }
                //内容
                html +=
                    '<ul><li>' +
                    '<div class="news-time f-left">' + time2 + '</div>' +
                    '<div class="f-left news-text">' +
                    '<img src="' + hasHttp(this.smallImg) + '">' +
                    '<div class="f-right">' +
                    '<h3><a href="#" idx="' + this.id + '">' + this.title + '</a></h3>' +
                    '<p>' + this.intro +
                    '<a href="#" idx="'+ this.id +'">[阅读全文]</a></p>' +
                    '</div>' +
                    '</div>' +
                    '</li></ul>';
                $(".box-one").append(html);
            })
            getStorage()
        })
    //媒体报道
    ajaxFun(
        {
            typeCodes:[ "mediaReport"],
            limit:2000
        },
        function (data) {
            var str = [];
			var strY = [];
            $.each(data,function () {
                var time = new Date(this.publishTime);
				var time2 = time.getFullYear()+"-"+month(time);
				var mouth =  time.getMonth()+1;
				var year =  time.getFullYear();
				var html = '';
				if(strY.indexOf(year) == -1) {
					str = [];
					strY.push(year)
				}
                if (str.indexOf(mouth) == -1) {
                    // 加标题
                    html +=
                        '<h1>' + monthMap[mouth] + '</h1>';
                    str.push(mouth)
                }
                //内容
                html +=
                    '<ul><li>'+
                    '<div class="news-time f-left">'+time2+'</div>'+
                    '<div class="f-left news-text'+'">'+
                    '<img src="'+hasHttp(this.smallImg)+'">'+
                    '<div class="f-right">'+
                    '<h3><a href="#"  idx="'+ this.id +'">'+this.title+'</a></h3>'+
                    '<p>'+this.intro+
                    '<a href="#" idx="'+ this.id +'">[阅读全文]</a></p>'+
                    '</div>'+
                    '</div>'+
                    '</li></ul>';
                $(".box-two").append(html);
				
            });
            getStorage();
        });
});




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