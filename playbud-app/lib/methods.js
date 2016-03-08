Meteor.methods({
  updateChildFirstName(childFirstName) {
    check(childFirstName, String);
    if (!this.userId) {
      throw new Meteor.Error('not-logged-in', 'Must be logged in to update child first name');
    }
    return Meteor.users.update(this.userId, { $set: { 'parent.childFirstName': childFirstName } });
  },
  updateChildDateOfBirth(childDateOfBirth) {
    check(childFirstName, Date);
    if (!this.userId) {
      throw new Meteor.Error('not-logged-in', 'Must be logged in to update child date of birth');
    }
    return Meteor.users.update(this.userId, { $set: { 'parent.childDateOfBirth': childDateOfBirth } });
  }
});
