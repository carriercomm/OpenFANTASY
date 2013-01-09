jQuery(document).ready(function () {
	var url = OF_PATH + 'web/hello';

	asyncTest( "Hello World!", function() {
		var xhr = jQuery.get(url + '/', {}, function(data) {
			ok(data.status == 1, JSON.stringify(data));
			start();
		});
	});

	asyncTest( "Hello psychobunny!", function() {
		var info = {
			'myName': 'psychobunny',
		};

		var xhr = jQuery.get(url + '/name', info, function(data) {
			ok(data.status == 1, JSON.stringify(data));
			start();
		});
	});

});