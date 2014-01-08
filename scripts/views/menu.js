// Making hello world 
define(['backbone', 'underscore', 'jquery', 'bootstrap', 'views/app'], function(Backbone, _, $, boot, App) {

    var menu = Backbone.View.extend({
        el: $('#menu'),
        
                //making an event for the button
        events:{
            'click #about':	   'RenderAbout',
            'click #home':	   'RenderHome'
            
        },


        initialize: function() {
             _.bindAll(this, 'render');
            this.renderItem();
        },
        renderItem: function(){
            this.$el.append('<li class="active" id="home"><a href="#">Home</a></li>');
            this.$el.append('<li><a href="#" id="about">About</a></li>');
            this.$el.append('<li><a href="http://wibjer.github.io/-2DV407/brocco.html">Brocco</a></li>');
        },
        RenderAbout: function(){
             $( ".jumbotron" ).replaceWith("<div class='jumbotron'> <h2>About</h2></br> <p>Detta är min todo app som är skapad i backbone med requirejs"); 
        },
        RenderHome: function(){
          this.app = new App(); 
          this.app.initialize();
          console.log(this.app);
          console.log(this.app.initialize());
          console.log("heehj");
        }
    });

  return menu;
});