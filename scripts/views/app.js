// Making hello world 
define(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {

    var App = Backbone.View.extend({
        count: 0,
        el: $('.jumbotron'),
        //making an event for the button
        events:{
            'keypress #metaSourceValue': 'additem'
        },
        initialize: function() {
             _.bindAll(this, 'render','additem');
            this.render();
        },
        
        render: function(){
            this.$el.append('<input type="textarea" id="metaSourceValue"  class="form-control" placeholder="FUCK are u going 2 do?">');
            this.$el.append("</br><p class='lead'>" + $("#hello").length + " st</p>"); 
        },
        
        additem: function(e){
            
             if (e.which !== 13 ) {
                                return;
             }
                var metaSourceValue = $('#metaSourceValue').val();
                if(!metaSourceValue.trim())
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
                    $("#metaSourceValue").val('');
                }
            }
    });
  return App;
});