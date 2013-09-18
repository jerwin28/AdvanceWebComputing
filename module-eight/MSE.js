$(function(){
	$('.bady').empty();
	$('body').append('<div class="mse-h"><span id="Date" class="span-date"></span></div>');
	$('body').append('<header class="mse-header">' +
						'<span id="span-header">' +
							'<div class="left-header">' +
								'<span class="mod8">Module 8</span>' +
								'<input class="input-c" type="text" id="search_input" value="" autocomplete="on" placeholder="Search Movies, actors, critics"/>' +
							'</div>' +
							'<div class="right-header">' +
								'<a id="box-o" class="btn btn-primary" href="#">Box Office </a>' +
								'<a id="in-t" class="btn btn-primary" href="#">In Theaters </a>' +
								'<a id="up" class="btn btn-primary" href="#">Upcoming</a>' +
							'</div>' +
						'</span>' +
					'</header>');
	$('body').append('<div class="bady"></div>');
	var value = $('search_input').val();
	var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var newDate = new Date();
	newDate.setDate(newDate.getDate());    
	$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
	$('#search_input').keypress	(function(E){
		if (E.which == 13){

	$ .ajax({
		url: 'http://api.rottentomatoes.com/api/public/v1.0/movies.json',
		dataType: 'jsonp',
		data: {
			q: $('#search_input').val(),
			apiKey: '9qdx6nfsqq5wj4zjbm4tdgmv'
		},
		success: showMovies
			});
		$('#search_input').val('');
		}
	});
	
	$('#box-o').click(function(){
		$.ajax({
		url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json',
		dataType: 'jsonp',
		data: {
			apiKey: '9qdx6nfsqq5wj4zjbm4tdgmv'
		},
		success: showMovies
		});
	});
	
	$('#in-t').click(function(){
	$.ajax({
		url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json',
		dataType: 'jsonp',
		data: {
			apiKey: '9qdx6nfsqq5wj4zjbm4tdgmv'
		},
		success: showMovies
		});
	});
	
	$('#up').click(function(){
	$.ajax({
		url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json',
		dataType: 'jsonp',
		data: {
			apiKey: '9qdx6nfsqq5wj4zjbm4tdgmv'
		},
		success: showMovies
		});
	});

	function showMovies(response){ 
		console.log('response', response);
		var movies = response.movies;
		for (var i = 0; i < movies.length; i++) {
			 var movie = movies[i];
			$('.bady').append("<div class='blocks'><h2>" + movie.title + " (" + movie.year + ") </h2> <br><img src='" + movie.posters.thumbnail + "'/> <div id='syp'> <b>Synopsis: </b> <div id='syp'>" + movie.synopsis + " </div><br><b>Rated: </b> <div id='syp'>" + movie.mpaa_rating + " </div><br><b>In Theaters: </b><div id='syp'>" + movie.release_dates.theater + " </div><br><b>Critics Rating: </b><div id='syp'>" + movie.ratings.critics_rating + " </div><br><b>Audience Rating: </b><div id='syp'>" + movie.ratings.audience_rating + "</div> </div> </div>");
		};
	}	
});

