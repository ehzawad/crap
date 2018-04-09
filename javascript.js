var phase = 'comeout'; //what phase is the game in?
var point; //if we get to point phase, store the desired point value
var message; //user feedback
var url = 'img/';

$('#dice').click(function() {
	//to add the rolls together
	var roll = 0;

	$('#dice img').each(function() {
		var value = Math.ceil(Math.random() * 6);
		roll += value;
		$(this).attr('src', url + value + '.png');
	});
	console.log(roll);
	//what phase is it
	if (phase == 'comeout') {
		//this was the first roll
		if (roll == 2 || roll == 3 || roll == 12) {
			//crapped out
			message = roll + '. You crapped out. start again';
			roll = 0;
			phase = 'comeout';
		} else if (roll == 7 || roll == 11) {
			message = roll + '. You win!';
			roll = 0;
			phase = 'comeout';
		} else {
			//set the point value and set phase top point
			phase = 'point';
			point = roll;
			message = 'Point Phase! Try to get <b>' + point + '</b>!';
		}
	} else {
		//point phase
		if (roll == 2 || roll == 3 || roll == 12 || roll == 7) {
			//crapped out
			message = roll + '. You crapped out. start again';
			roll = 0;
			phase = 'comeout';
		} else if (roll == point) {
			message = roll + '! Winner!';
			roll = 0;
			phase = 'comeout';

		}else{
			message = roll + '. Your turn is still going! remember you want ' + point + '!';
		}
	}

	//update the message
	$('#message').html(message);
});

