List = new Meteor.Collection('tlr-list');

if (Meteor.isClient) {
  Template.form.events({
    'click #btn-set-label' : function () {
      var el = document.querySelector('#fld-label'),
          label = el.value;
 
      List.insert({label: label, date: new Date()});
      
      el.value = '';
    }
  });

  Template.list.helpers({
    'getItem': function () {
      return List.find({}, {sort: {date: 1}});
    },
    
    'getItemCount': function () {
      return List.find({}).count();
    }
  });
}
