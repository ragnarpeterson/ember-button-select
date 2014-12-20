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
      this.buttons.removeObject(button);

      if (button.get('isSelected')) {
        this.set('selected', this.buttons.get('firstObject.value') || null);
      }
    }
  }
});
