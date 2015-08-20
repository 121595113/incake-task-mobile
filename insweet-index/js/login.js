$(function() {
	$(".login-tab a").click(function() {
		$(".login-tab a").removeClass('active');
		$(this).addClass('active');
		var s = $(this).index();
		$(".login-content >li").hide();
		$(".login-content >li").eq(s).show();
	})
})