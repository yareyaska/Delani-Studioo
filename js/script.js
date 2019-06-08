$(document).ready(function() {
	$(".clickable").click(function() {
		$("#showing").slideToggle();
		$("#hidden").slideToggle();
	});

	$(".clickable2").click(function() {
		$("#showing2").slideToggle();
		$("#hidden2").slideToggle();
	});


	$(".clickable3").click(function() {
		$("#showing3").slideToggle();
		$("#hidden3").slideToggle();
	});

	$(".over").hover(function() {
		$(this).animate({
			opacity: '1'
		});
	},
	function() {
		$(this).animate( {
			opacity : '0'
		});
	});



	$("#submit").click(function(event){
		var name = $("#name1").val();
		if(name != ""){
			alert(name + "thanks for sending a message.")

		}else {
			alert("please fill in your details")
		}
		event.preventDefault();
	});
});


