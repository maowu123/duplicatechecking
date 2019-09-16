/**
 * 
 */
	$(function() {
		$(".uitem").hide();
		$(".litem>a").click(function(){
			$(this).next().toggle();
		});
	});
