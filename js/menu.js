$('.menu').css('margin-top', '0');
	$("#option1").hover(function(){
		$('.menu').css('margin-top', '160px');
	    $('#submenu1').css('display', 'block');
		    $("#submenu1").hover(function(){
		    	$('.menu').css('margin-top', '160px');
		    	$('#submenu1').css('display', 'block');
		    }, function(){
		    	$('#submenu1').css('display', 'none');
		    	$('.menu').css('margin-top', '0');
		    });
	    }, function(){
	 	$('.menu').css('margin-top', '0');
	 	$('#submenu1').css('display', 'none');
	});
	
	$("#option2").hover(function(){
		$('.menu').css('margin-top', '122px');
	    $('#submenu2').css('display', 'block');
	    	$("#submenu2").hover(function(){
		    	$('.menu').css('margin-top', '122px');
		    	$('#submenu2').css('display', 'block');
		    }, function(){
		    	$('#submenu2').css('display', 'none');
		    	$('.menu').css('margin-top', '0');
		    });
	    }, function(){
	 	$('.menu').css('margin-top', '0');
	 	$('#submenu2').css('display', 'none');
	});
	
	$("#option3").hover(function(){
		$('.menu').css('margin-top', '122px');
	    $('#submenu3').css('display', 'block');
	    	$("#submenu3").hover(function(){
		    	$('.menu').css('margin-top', '122px');
		    	$('#submenu3').css('display', 'block');
		    }, function(){
		    	$('#submenu3').css('display', 'none');
		    	$('.menu').css('margin-top', '0');
		    });
	    }, function(){
	 	$('.menu').css('margin-top', '0');
	 	$('#submenu3').css('display', 'none');
});