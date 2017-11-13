$(document).ready(function() {
	
	function render(x) {
		for (let i = 0; i < x; i++) {
			$('.container').append("<div class='gridbox-x'></div>");
		}
	};
	
	render(1600);
	
	function makeSnake() {
		$('.gridbox-x:nth-child(701)').text('O');
	}
	makeSnake();
	
	let snake {
		position: [20, 20],
		direction: 'r'
		currentSnake: [[20], [20]]
	};
	
});
