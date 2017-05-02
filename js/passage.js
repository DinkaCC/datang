
$(function () {
	//得到缓存数据
    var id = sessionStorage.getItem("id");
	//请求文章 ajax
    $.ajax({
        type: "post",
        url: "/ylkj-api/c/article/detail",
        dataType: "json",
        data:{
            id:id
        },
        success:function(data){
            data = data.data;
            var time =  new Date(data.publishTime);
            var time2 = time.getFullYear()+"-0"+(time.getMonth()+1)+"-0"+time.getDate();
            var html =
                '<h3>'+data.title+'</h3>' +
                '<div>发布日期：'+time2+'</div>'+data.content;
            $(".passage-box").append(html)
        }
    })
})