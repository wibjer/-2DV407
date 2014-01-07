// Making hello world 
define(['backbone', 'underscore', 'jquery', 'models/AppModel', 'collections/AppController'], function(Backbone, _, $, Todo, Collection) {

    var App = Backbone.View.extend({
        
        el: '.jumbotron',
        
        //making an event for the button
        events:{
            'keypress #submit':    'additem',
            'click .destroy':      'delete',
            'click .checked':	   'checked'
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
			this.count();
		},

        
        newAtt: function(){
            return {
                title: $('#submit').val(),
                completed: false,
                id: Math.floor((Math.random()*500)+1) 
            };
        },
        
        count: function(){
			var remaining = this.todos.remaining().length;
			
            var number = remaining;
            $( "#visible" ).remove();
            console.log(number);
            if(number === 0)
            {
                number = "nothing"
            }
            
            return $('#count').append("<h3 id='visible'>Shit 2 do left: " + number + "</h3>");
        },
         
        checked: function (e) {
            var id = $(e.target).attr("id");
            if(id !== ""){
                   var model = this.todos.get(id);
                   model.toggle();
            }
            this.count();
		},
		
        renderOne: function(model){
            this.count();
            console.log(model.get("completed"));
            if(model.get("completed")=== true)
            {
                return $('#list-todos').append("<li><input class='checked' id='"+ model.get("id") + "' type='checkbox' checked><label><h3 id='hello'> " + model.get("title") + "</h3></label><button id='"+ model.get("id") + "' class='destroy'></button></input></li>");
            }
            else
                return $('#list-todos').append("<li><input class='checked' id='"+ model.get("id") + "' type='checkbox'><label><h3 id='hello'> " + model.get("title") + "</h3></label><button id='"+ model.get("id") + "' class='destroy'></button></input></li>");
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

            var input = $('#submit').val().trim();

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