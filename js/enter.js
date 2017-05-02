//提交按钮点击事件
$(".submit-btn").click(function(){
    $("input").each(function(index,input){
        if(input.value == ""){
            $(input).parent().next().text(this.placeholder);
        }
    });
});
//重新输入 取消提示
$("input").each(function(index,input){
    $(this).focus(
        function () {
            $(input).parent().next().text("");
        }
    )
});

