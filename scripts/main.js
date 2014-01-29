require.config({
	baseUrl: "scripts/",
	paths: {
            'backbone': 'vendor/backbone',
			'backbone.localStorage': 'vendor/backbone.localStorage',
			'jquery': 'vendor/jquery',
			'underscore': 'vendor/underscore',
			'bootstrap': 'vendor/bootstrap',
			'routers': 'vendor/router',
			'text': 'vendor/text',
			'todocollection': 'collections/todoCollection',
            'about': 'views/about',
            'app': 'views/app',
            'todomodel': 'models/todoModel'
	}
});

require(['backbone', 'router'], function(Backbone, Router) {

    var container = $(".jumbotron");
    new Router({el: container});
    Backbone.history.start();

});