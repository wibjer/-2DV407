// Making hello world 
define(['backbone', 'underscore', 'jquery','text!templates/about.html'], 
        function(Backbone, _, $,  aboutTemplate) {

    var AboutView = Backbone.View.extend({

        template: _.template(aboutTemplate),
        
        events:{
            
        },

        initialize: function() {
            this.render();
            
        },
        render: function(){
            $('#home').removeClass('active');
            $('#about').addClass('active');
           this.$el.html(this.template(this));
           return this;
        }
    });

  return AboutView;
});