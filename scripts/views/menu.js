// Making hello world 
define(['backbone', 'underscore', 'jquery', 'bootstrap'], function(Backbone, _, $, boot) {

    var menu = Backbone.View.extend({
        el: $('#menu'),


        initialize: function() {
             _.bindAll(this, 'render');
            this.renderItem();
        },
        renderItem: function(){
            this.$el.append('<li><a href="http://wibjer.github.io/-2DV407/brocco.html">Brocco</a></li>');
        }
    });

  return menu;
});