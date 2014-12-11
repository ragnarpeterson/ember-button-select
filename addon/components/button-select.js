import Em from 'ember';

export default Em.Component.extend({
  classNames: ['button-select'],
  buttons: null,
  selected: null,

  setup: function() {
    this.buttons = [];
  }.on('init'),

  actions: {
    select: function(button) {
      this.set('selected', button.get('value'));
      this.buttons.setEach('isSelected', false);
      button.set('isSelected', true);
    },

    register: function(button) {
      button.set('isSelected', button.get('value') === this.get('selected'));
      this.buttons.addObject(button);
    }
  }
});
