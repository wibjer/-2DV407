define(['underscore','backbone','backbone.localStorage','models/AppModel'], function(_, Backbone, Store, Todo){
      
      var TodoCollection = Backbone.Collection.extend({
                // Reference to this collection's model.
                model: Todo,

                // Save all of the todo items 
                localStorage: new Store('todos-backbone')
      });
        return TodoCollection;
});
