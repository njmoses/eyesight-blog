/*!
 * Style switcher
 * Author: Paul Laros
 * Author URI: https://github.com/paullaros
 */
$(function(){

	change();

	$(".themeswitcher").on("click", function(e){
		$(".themeswitcher").toggleClass("open");
	});

	$(".themeswitcher").on("click", ".color", function(e){
		color = $(this).data("color");
		change(color);
	});

});

function change(string){

	if(string){
		localStorage.colour = string;
	}

	if(!localStorage.colour || localStorage.colour == ""){
		localStorage.colour = "orange";
	}

	$("body").removeClass();
	$("body").addClass("theme-" + localStorage.colour);

}