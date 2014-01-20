define(['backbone','app','about', 'todocollection'], function(Backbone, App, About, TodoCollection) {

    return Backbone.Router.extend({

        initialize: function(opt) {
            this.el = opt.el;
        },

        routes: {
            "": "index",
            "about": "about"
        },

        index: function() {
            var todos = new TodoCollection();
            var view = new App( {collection: todos} );
            this.el.empty();
            this.el.append(view.render().el);

        },

        about: function() {
            var view = new About();
            this.el.empty();
            this.el.append(view.render().el);
        }

    });
});