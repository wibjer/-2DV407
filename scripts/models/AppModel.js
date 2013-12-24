define(['underscore','backbone'], function(_, Backbone) {
  
  var Todo = Backbone.Model.extend({
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
                    }
               
        });
  return Todo;
});