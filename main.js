'use strict';
$(document).ready(function (){
	var turn=0;
	$('.newGame').click(function(){
		location.reload();
	});
	$('.keypad').on('click','.cells',function(){
		var $element = $(this);
		if(turn%2===0){
			$element.text("X");
			$element.removeClass( "cells" ).addClass( "X" );
			$(".space").text("Y's Turn");
			win();
		}
		else{
			$element.text("0");
			$element.removeClass( "cells" ).addClass( "Y" );
			$(".space").text("X's Turn");
			win();
		}
		turn++;
	});
});
function win(){
	var one = $('#1').text();
	var two = $('#2').text();
	var three = $('#3').text();
	var four = $('#4').text();
	var five = $('#5').text();
	var six = $('#6').text();
	var seven = $('#7').text();
	var eight = $('#8').text();
	var nine = $('#9').text();
	if(one === two && two === three && (three === 'X' || three === '0'))
		alert(one+" Wins");
	else if(four === five && five === six && (six === 'X' || six === '0'))
		alert(four+" Wins");
	else if(seven === eight && eight === nine && (nine === 'X' || nine === '0'))
		alert(seven+" Wins");
	else if(one === four && four === seven && (seven === 'X' || seven === '0'))
		alert(one+" Wins");
	else if(two === five && five === eight && (eight === 'X' || eight === '0'))
		alert(two+" Wins");
	else if(three === six && six === nine && (nine === 'X' || nine === '0'))
		alert(three+" Wins");
	else if(one === five && five=== nine && (nine === 'X' || nine === '0'))
		alert(one+" Wins");
	else if(seven === five && five === three && (three === 'X' || three === '0'))
		alert(seven+" Wins");
	else if(one && two && three && four && five && six && seven && eight && nine)
		alert("Draw Game");
	else {
		console.log("something wrong");
	}	
	return;
}
