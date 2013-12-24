// Making hello world 
define(['backbone', 'underscore', 'jquery', 'models/AppModel', 'collections/AppController'], function(Backbone, _, $, Todo, Collection) {

    var App = Backbone.View.extend({
        
        el: '.jumbotron',
        
        //making an event for the button
        events:{
            'keypress #metaSourceValue': 'additem',
            'click .destroy':        'delete'
        },
        
        initialize: function() {
            this.todos = new Collection();
            this.todos.fetch();
            _.bindAll(this, 'render','additem');
            this.render();
        },
        
        render: function(){
            var that = this;
            this.todos.each(function (todo) {
                that.renderOne(todo);

            });
            
        },
        
        addAll: function () {
			this.$('#list-todos').html('');
			this.todos.each(this.renderOne, this);
		},

        
        newAtt: function(){
            return {
                title: $('#metaSourceValue').val(),
                completed: false,
                id: Math.floor((Math.random()*500)+1) 
            };
        },
        
        renderOne: function(model){
            console.log(model.get("id"));
            console.log(model.get("title"));
           return $('#list-todos').append("<li><input class='checked' type='checkbox'><label><h3 id='hello'> " + model.get("title") + "</h3></label><button id='"+ model.get("id") + "' class='destroy'></button></input></li>");
        },
        
        // Remove the item, destroy the model from *localStorage* and delete its view.
        delete: function(e){
            
            var id = $(e.target).attr("id");
            if(id !== ""){
                console.log(id);
                   var model = this.todos.get(id);
                   model.destroy();
                   this.addAll();
            }else {
                console.log("null");
            }
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