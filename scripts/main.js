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

require(['views/app', 'views/menu'], function(AppView, menuView) {
	new AppView;
	new menuView;
});