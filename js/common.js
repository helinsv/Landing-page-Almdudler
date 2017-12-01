$(function() {
$(".fancybox").fancybox();
	
var owl = $(".slide-articles");
	owl.owlCarousel({
		items : 2
	});
	
	$(".btn-left").click(function(){
		owl.trigger("owl.prev");
	});
	$(".btn-right").click(function(){
		owl.trigger("owl.next");
	});

var owl1 = $(".carousel");
owl1.owlCarousel({
	items : 6
});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});
