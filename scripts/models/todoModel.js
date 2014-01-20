define(['backbone','underscore'], function(Backbone,_) {
  
  var TodoModel = Backbone.Model.extend({
        defaults: {
                title: "",
                completed: false,
                id: ""
        },
        title: function() { 
            return this.get("title"); 
        },
        completed: function(){ 
            return this.get("completed"); 
        },
        toggle: function () {
            this.save({
            completed: !this.get('completed')
            });
        }
           
    });
    return TodoModel;
});