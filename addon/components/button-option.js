import Em from 'ember';

export default Em.Component.extend({
  tagName: 'button',
  type: 'button',
  classNames: ['button-option'],
  classNameBindings: ['isSelected:selected'],
  attributeBindings: ['type'],
  value: null,
  isSelected: false,

  register: function() {
    this.get('parentView').send('register', this);
  }.on('didInsertElement'),

  select: function() {
    this.get('parentView').send('select', this);
  }.on('click')
});
