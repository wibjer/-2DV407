define(['backbone','backbone.localStorage','models/AppModel'], function(Backbone, Store, Todo){
      
    var TodoCollection = Backbone.Collection.extend({
        // Reference to this collection's model.
        model: Todo,
        
        // Save all of the todo items 
        localStorage: new Store('todos-backbone'),
        
        completed: function () {
        	return this.filter(function (todos) {
        		return todos.get('completed');
        	});
        },
        
        remaining: function () {
        	return this.without.apply(this, this.completed());
        }
    });
    return new TodoCollection;
});
