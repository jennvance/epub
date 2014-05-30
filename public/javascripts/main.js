$(document).ready(function () {

	$(".nav1 li > a").on("click", function () {
		$(".nav1 li > a").removeClass("active");
		$(this).addClass("active");
	});

	// $('form').on('submit', function(event) {
	// 	event.preventDefault();
	// 	// console.log($(this).serialize());
	// 	var authorInfo = $(this).serialize();
	// 	//Store authorInfo somehow
	// 	// $.post('/', authorInfo, function(data) {
	// 	// 	$('').verb(data);
	// 	// })
	// }
});		
