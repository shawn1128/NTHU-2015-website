$(document).ready(function(){
		alert("Hello World");
		
		$("#hide").click(function(){
			$("#name").hide();			
		});
		$("#show").click(function(){
			$("#name").show();			
		});
		$("#Toggledown").click(function(){
			$("#B-photo").slideDown("slow");			
		});
		$("#Toggleup").click(function(){
			$("#B-photo").slideUp("slow");			
		});
		$("#play").click(function(){
			$("#C-photo").animate({width:'510px'},"slow");
			$("#C-photo").animate({fontSize:'91px'},"slow");
			$("#C-photo").animate({height:'600px'},"slow");
			$("#C-photo").animate({fontSize:'91px'},"slow");
			$("#C-photo").animate({width:'100px'},"slow");
			$("#C-photo").animate({fontSize:'91px'},"slow");
			$("#C-photo").animate({height:'100px'},"slow");
			$("#C-photo").animate({fontSize:'10px'},"slow");																	
		});			
});

