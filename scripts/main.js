require.config({
	baseUrl: "scripts/",
	paths: {
			'jquery': 'vendor/jquery',
			'underscore': 'vendor/underscore',
			'backbone': 'vendor/backbone',
			'backbone.localStorage': 'vendor/backbone.localStorage',
			'bootstrap': 'vendor/bootstrap'
	}
});

require(['views/app', 'views/menu', 'models/AppModel'], function(AppView, menuView, Todo) {
    new AppView( { model: new Todo() });
	new menuView();
});