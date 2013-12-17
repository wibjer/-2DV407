define(['underscore','backbone','backbone.localStorage','models/AppModel'], function(_, Backbone, Store, Todo){
      
      var Collection = Backbone.Collection.extend({
                // Reference to this collection's model.
                model: Todo,

                // Save all of the todo items under the `"todos"` namespace.
                localStorage: new Store('todos-backbone')
      });
        return new Collection;
});
