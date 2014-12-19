import Em from 'ember';

export default Em.Component.extend({
  tagName: 'button',
  type: 'button',
  classNames: ['button-option'],
  classNameBindings: ['isSelected:selected'],
  attributeBindings: ['type'],
  label: null,
  value: null,
  isSelected: Em.computed('parentView.selected', function () {
    return this.get('parentView.selected') === this.get('value');
  }).readOnly(),

  register: Em.on('didInsertElement', function() {
    this.get('parentView').send('register', this);
  }),

  unregister: Em.on('willDestroyElement', function() {
    this.get('parentView').send('unregister', this);
  }),

  select: Em.on('click', function() {
    this.get('parentView').send('select', this);
  })
});
