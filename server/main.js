import { Meteor } from 'meteor/meteor';

Persons = new Mongo.Collection('persons');

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('getByCpf', () => {
  return Persons.find({});
})

Persons.allow({
  insert: function() {
    return true;
  },
  remove: function() {
    return true;
  },
  update: function() {
    return true;
  }
})
