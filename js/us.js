$(function () {
    //us-圆点切换轮播
    var swiper = new Swiper('.lunbo', {
        //圆点控制
        pagination: '.swiper-pagination',
        //点击原点切换轮播
        paginationClickable: '.lunbo-pagination',
        //轮播曲线 淡出淡入
        effect: 'fade',
        //自动播放
        autoplay: 3000
    });
	//四个图一起播
	var objectCarousel = new Swiper('.friend .swiper-container', {
		autoplay: 3000,//可选选项，自动滑动
		loop: true,//循环
		slidesPerView : 6,//轮播区域需要显示的slide数量
		autoplayDisableOnInteraction: false,//交互（拖拽）之后是否停止轮播
	});
	//轮播左右切换
	$(".arrow-left").on("click",function(){
		console.log("aaa")
		objectCarousel.swipePrev();
	});
	$(".arrow-right").on("click",function(){
		objectCarousel.swipeNext();
	});
	
	
	var map = new BMap.Map("map");
	//获得位置，缩放比例
	map.centerAndZoom("北京市海淀区北太平庄路18号城建大厦C座",19);
	//滚动鼠标 变换缩放
	map.enableScrollWheelZoom(true);

	setTimeout(function(){
		map.setZoom(15)
	},2000)

	var scale = new BMap.ScaleControl({
		//缩放比例条的位置 底部 左边
		anchor:BMAP_ANCHOR_BOTTOM_LEFT
	});
	map.addControl(scale);
	//缩放控件
	var nav = new BMap.NavigationControl({
		anchor:BMAP_ANCHOR_TOP_RIGHT,
		// type:BMAP_NAVIGATION_CONTROL_LARGE
		// type:BMAP_NAVIGATION_CONTROL_SMALL
		// type:BMAP_NAVIGATION_CONTROL_PAN
		type:BMAP_NAVIGATION_CONTROL_ZOOM
	})
	map.addControl(nav);
	var type = new BMap.MapTypeControl();
	map.addControl(type);
	//图片覆盖物
	var point = new BMap.Point(120.415,36.08777);
	var mark = new BMap.Marker(point);


	var geocoder = new BMap.Geocoder();
	geocoder.getPoint("北京市海淀区北太平庄路18号城建大厦C座",function(point){
		var mark = new BMap.Marker(point);
		map.addOverlay(mark);
		var opts = {
		width:100,
		height:30,
		title:"北京市海淀区北太平庄路18号城建大厦C座",
		background:"#f2f2f2",
		position:point,
		offset:new BMap.Size(30,-40)
	};
	mark.addEventListener("click",function(){
		var info = new BMap.InfoWindow("北京市海淀区北太平庄路18号城建大厦C座",opts);
	map.openInfoWindow(info,point)
	})

	},"青岛市");


	var menu = new BMap.ContextMenu();
	var menuItem1 = new BMap.MenuItem("放大",function(){
		map.zoomIn();
	})
	menu.addItem(menuItem1);
	var menuItem2 = new BMap.MenuItem("缩小",function(){
		map.zoomOut();
	})
	menu.addItem(menuItem2);
	map.addContextMenu(menu)
	
})