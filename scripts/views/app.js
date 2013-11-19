// Making hello world 
define(['backbone'], function(Backbone) {
  var App = Backbone.View.extend({
    el: $('body'),
    //making an event for the button 
    events:{
        'click button#add' : 'additem'
    },
    initialize: function() {
         _.bindAll(this, 'render', 'additem');
        this.render();
    },
    render: function(){
        $(this.el).append("<button id ='add'>Say hello!</button>");
    },
    additem: function(){
        $(this.el).append("<h1>Hello World!</h1>");
    }
  });

  return App;
});