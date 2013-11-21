// Making hello world 
define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {

    var App = Backbone.View.extend({
        count: 0,
        el: $('.jumbotron'),
        //making an event for the button
        events:{
            'click #add' : 'additem',
        },
        initialize: function() {
             _.bindAll(this, 'render','additem');
            this.render();
        },
        
        render: function(){
            var counts = $('[id^=hello]').length;
            this.$el.append('<input type="textarea" id="metaSourceText" class="form-control" placeholder="FUCK are u going 2 do?"><p><a class="btn btn-lg btn-success" href="#" role="button" id="add">Fucking Do!</a></p>');
            this.$el.append("<p class='lead'>" + $("#hello").length + " st</p>"); 
        },
        
        additem: function(){
            var metaSourceValue = $('#metaSourceText').val();
            if(metaSourceValue.length == 0)
            {
                if($("#fail").length == 0){
                    if(this.count > 0)
                    {
                        this.$el.append("<p id='fail'>Are you retarded? please fill the form!!!</p>");
                    }
                    else{
                        this.$el.append("<p id='fail'>What an idiot..Fill the fucking form!!</p>");
                        this.count++;
                    }
                } 
            }
            else{
                $( "#fail" ).remove();
                this.$el.append("<ul><li><h3 id='hello'>" + metaSourceValue + "</h3></li></ul>");
            }
        }
    });
  return App;
});