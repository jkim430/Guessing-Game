$(document).ready(function() {
	var num = Math.round(Math.random()*100);
	var count = 5;
	var guesses = [];
	var prev;

	$('.form-control').on('keyup', function(event) {
		if (event.which === 13)
			$('.btn-warning').click();
	});

	$('.btn-warning').on('click', function() {
	  var guess = 1*$('.form-control').val();
	  var warn = 0;

	  if (guesses.indexOf(guess) !== -1) {
	  	alert('You already guessed that!');
	  	warn++;
	  }

	  if (guess > 100 || guess < 0) {
	  	alert('Invalid entry');
	  	warn++;
	  }
	  if (guess == '') {
	  	alert('Invalid entry');
	  	warn++;
	  }
	  if (isNaN(guess)) {
		alert('Invalid entry');
	  	warn++;
	  }

	  if (count > 0 && warn === 0) {
	  	guesses.push(guess);
	  	prev = guesses[guesses.length-2];
	  	count--;
		$('.remaining').find('span').text(count);
		$('h3').text('Your Guesses');

		if (Math.abs(num-guess) >= 25) {
			$('.jumbotron').css('background-color', 'rgba(0,115,255,0.9)')
			if (num>guess)
				$('.message').find('p').text("You're a Yeti. Guess higher");
			if (num<guess)
				$('.message').find('p').text("You're a Yeti. Guess lower");
			$('.remaining').find('div').append($('<p><img src="https://cdn0.iconfinder.com/data/icons/good-weather-1/96/weather_icons-68-32.png">'+guess+'</p>'));
		}
		if (Math.abs(num-guess) >= 15 && Math.abs(num-guess) < 25) {
			$('.jumbotron').css('background-color', 'rgba(0,239,255,0.9)')
			if (num>guess)
				$('.message').find('p').text("You're Olaf. Guess higher");
			if (num<guess)
				$('.message').find('p').text("You're Olaf. Guess lower");
			$('.remaining').find('div').append($('<p><img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/26/water.png">'+guess+'</p>'));
		}
		if (Math.abs(num-guess) >= 5 && Math.abs(num-guess) < 15) {
			$('.jumbotron').css('background-color', 'rgba(255,137,0,0.9)')
			if (num>guess)
				$('.message').find('p').text("You're a phoenix! Guess higher");
			if (num<guess)
				$('.message').find('p').text("You're a phoenix! Guess lower");
			$('.remaining').find('div').append($('<p><img src="https://cdn3.iconfinder.com/data/icons/meteocons/512/sun-symbol-32.png">'+guess+'</p>'));
		}
		if (Math.abs(num-guess) < 5 && Math.abs(num-guess) !== 0) {
			$('.jumbotron').css('background-color', 'rgba(255,0,0,0.9)')
			if (num>guess)
				$('.message').find('p').text("YOU'RE A FIRE BREATHING DRAGON. Guess higher");
			if (num<guess)
				$('.message').find('p').text("YOU'RE A FIRE BREATHING DRAGON. Guess lower");
			$('.remaining').find('div').append($('<p><img src="https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/fire-24.png">'+guess+'</p>'));
		}

		if (Math.abs(guess-num) < Math.abs(prev-num)) {
	  		$('.temp').find('p').text("You're hotter than your previous guess");
	  	}
	  	if (Math.abs(guess-num) > Math.abs(prev-num)) {
	  		$('.temp').find('p').text("You're colder than your previous guess");
	  	}
	  	
		if (num === guess) {
			$('.jumbotron').css('background-color', 'rgba(238,238,238,0.9)')
			$('.message').find('p').text("You win.");
			$('.remaining').find('div').append($('<p><img src="https://cdn0.iconfinder.com/data/icons/very-basic-android-l-lollipop-icon-pack/24/checkmark-24.png">'+guess+'</p>'));
			$('.temp').find('p').text("");
		}
	  }
	  warn = 0;
	});

	$('.hint').on('click', function() {
		$('.remaining').find('p').last().text(num);
	});
	$('.play').on('click', function() {
		location.reload();
	})
});