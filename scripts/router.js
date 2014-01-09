define(['backbone','views/app','views/about'], function(Backbone, App, About) {
    
    return Backbone.Router.extend({
        view: {}
        ,
        initialize: function(opt) {
            this.el = opt.el;
        },
        
        routes: {
            "": "index",
            "about": "about"
        },
        changeView: function(newView) {
            
            if(typeof this.view.dispose === "function") {
                    this.view.dispose();
            }
            this.view = newView;
        },
        
        index: function() {
            this.changeView(new App());
            this.el.empty();
            this.el.append(this.view.render().el);
            
            
        },
        
        about: function() {
            this.changeView(new About());
            this.el.empty();
            this.el.append(this.view.render().el);
        }
    });
});