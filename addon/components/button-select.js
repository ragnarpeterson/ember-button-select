import Em from 'ember';

export default Em.Component.extend({
  classNames: ['button-select'],
  buttons: null,
  selected: null,

  setup: Em.on('init', function() {
    this.buttons = Em.A();
  }),

  actions: {
    select: function(button) {
      this.set('selected', button.get('value'));
    },

    register: function(button) {
      this.buttons.addObject(button);
    },

    unregister: function(button) {
      // how should we handle the case where the object being destroyed
      // is the selected button?
      this.buttons.removeObject(button);
    }
  }
});
