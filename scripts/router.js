define(['backbone','views/app','views/about'], function(Backbone, App, About) {
    
    return Backbone.Router.extend({
        
        initialize: function(opt) {
            this.el = opt.el;
        },
        
        routes: {
            "": "index",
            "about": "about"
        },
        
        index: function() {
            var view = new App();
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