define(['backbone', 'underscore', 'jquery', 'todomodel', 'text!templates/main.html'],
        function(Backbone, _, $, Todo, mainTemplate) {

    var App = Backbone.View.extend({

        template: _.template(mainTemplate),

        //making an event for the button
        events:{
            'keypress #submit':      'additem',
            'click .destroy':        'delete',
            'click .css-checkbox':   'checked',
            'dblclick .css-label':   'edit',
            'keypress .editform':    'edititem'

        },

        initialize: function() {
            this.collection.fetch();
            //this.render();
        },

        render: function(){
            $('#about').removeClass('active');
            $('#home').addClass('active');
            this.$el.html(this.template(this));
            this.addAll();
            return this;
        },

        renderOne: function(model){
            this.count();
            if(model.get("completed")=== true)
            {
                this.$('#list-todos').append("<li><a id='"+ model.get("id") + "' class='destroy'>X</a><input type='checkbox' name='checkboxG4' id='"+ model.get("id") + "' class='css-checkbox' checked><label for='"+ model.get("id") + "' class='css-label' id='"+ model.get("id") + "'>" + model.get("title") + "</label></li>");
            }
            else {
                this.$('#list-todos').append("<li><a id='"+ model.get("id") + "' class='destroy'>X</a><input type='checkbox' name='checkboxG4' id='"+ model.get("id") + "' class='css-checkbox'><label for='"+ model.get("id") + "' class='css-label' id='"+ model.get("id") + "'>" + model.get("title") + "</label></li>");

            }
        },

        addAll: function () {
            $('#list-todos').empty();
			this.collection.each(this.renderOne, this);
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
			var remaining = this.collection.remaining().length;
            var number = remaining;
            $( "#visible" ).remove();
            if(number === 0)
            {
                number = "0 tasks and your mom";
            }
            $('#count').append("<p id='visible'>Shit 2 do left: " + number + "</p>");
        },

        checked: function (e) {
            var id = $(e.target).attr("id");
            if(id !== ""){
                   var model = this.collection.get(id);
                   model.toggle();
            }
            this.count();
		},

        // Remove the item, destroy the model from *localStorage* and delete its view.
        delete: function(e){

            var id = $(e.target).attr("id");
            if(id !== ""){
                   var model = this.collection.get(id);
                   model.destroy();
                   this.addAll();
            }else {
                console.log("null");
            }
        },

        edit: function(e){
            var id = $(e.target).attr("id");
            var model = this.collection.get(id);
            var title =  model.get("title");
            $( "#" + id ).remove();
            $( "#" + id ).replaceWith("<input type='textarea'  id='"+ id + "' class='editform' value='"+ title +"'>");


        },

        edititem: function(e){
            if (e.which !== 13 ) { return; }
            var id = $(e.target).attr("id");
            var model = this.collection.get(id);
            var input = $('#'+ id).val().trim();
            if (input.length > 0) {
                model.save({ title: input });
                this.addAll();
            }
            else{
                var oldtitle =  model.get("title");
                model.save({ title: oldtitle });
                this.addAll();
            }

        },

        additem: function(e){
            if (e.which !== 13 ) { return; }
            var input = $('#submit').val().trim();
            $( "#fail" ).remove();
            if (input.length > 0 && input.match(/^[a-zA-Z]+$/)) {

               var newModel = new Todo(this.newAtt());
                this.collection.add(newModel);
                this.renderOne(newModel);
                newModel.save();

                $("#submit").val('');
            }
          else {
                this.$el.append("<p id='fail'>Are you retarded? please fill the form and no illegal characters!!!</p>");
            }
        }
    });
  return App;
});
