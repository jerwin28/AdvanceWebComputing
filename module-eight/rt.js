$.ajax({
		url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json',
		dataType: 'jsonp',
		data: {
			apiKey: '9qdx6nfsqq5wj4zjbm4tdgmv'
		},
		success: showBoxOffice
		});

	$.ajax({
		url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json',
		dataType: 'jsonp',
		data: {
			apiKey: '9qdx6nfsqq5wj4zjbm4tdgmv'
		},
		success: showInTheater
		});

	$.ajax({
		url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json',
		dataType: 'jsonp',
		data: {
			apiKey: '9qdx6nfsqq5wj4zjbm4tdgmv'
		},
		success: showUpcoming
		});
