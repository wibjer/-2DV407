// Making hello world 
define(['backbone', 'underscore', 'jquery', 'models/AppModel', 'collections/AppController'], function(Backbone, _, $, Todo, Collection) {

    var App = Backbone.View.extend({
        
        el: '.jumbotron',
        
        //making an event for the button
        events:{
            'keypress #metaSourceValue': 'additem'
        },
        
        initialize: function() {
            this.todos = new Collection();
            this.todos.fetch();
            _.bindAll(this, 'render','additem');
            this.render();
        },
        
        render: function(){
            var that = this;
            this.$el.append('<input type="textarea" id="metaSourceValue"  class="form-control" placeholder="FUCK are u going 2 do?">');
            this.todos.each(function (todo) {
                that.renderOne(todo);
            });
            
        },
        
        newAtt: function(){
            return {
                title: $('#metaSourceValue').val(),
                completed: false
            };
        },
        
        renderOne: function(model){
             console.log(this.$el);
           return this.$el.append("<ul style='list-style:type: none;'><li><input class='checked' type='checkbox'><label><h3 id='hello'> " + model.get("title") + "</h3></label></input></li></ul>");
        }, 
        
        additem: function(e){
            if (e.which !== 13 ) { return; }

            var input = $('#metaSourceValue').val().trim();

            if (input.length > 0) {
                
               var newModel = new Todo(this.newAtt());
                this.todos.add(newModel);
                this.renderOne(newModel);
                newModel.save();

                $( "#fail" ).remove();
                $("#metaSourceValue").val('');
            } else {
                this.$el.append("<p id='fail'>Are you retarded? please fill the form!!!</p>");
            }
/*
            collection.create(this.newAtt());

            this.model = new Todo({
                title: $('#metaSourceValue').val().trim()
            });

            if(!$('#metaSourceValue').val().trim())
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
                this.$el.append("<ul><li><h3 id='hello'>" + this.title() + "</h3></li></ul>");
                $("#metaSourceValue").val('');
            }*/
        }
    });
  return App;
});