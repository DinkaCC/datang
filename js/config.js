
require.config({
	// config����·��
	paths: {
		"jquery"          : "jquery-min",
		"jquery-swiper"   : "idangerous.swiper2.7.6.min"
	},
	//���������
	shim: {
		"jquery-swiper"   : ["jquery"]
	}
})