import Em from 'ember';

function triggerOn(eventName, actionName) {
  return Em.on(eventName, function() {
    this.get('parentView').send(actionName, this);
  });
}

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

  register: triggerOn('didInsertElement', 'register'),
  unregister: triggerOn('willDestroyElement', 'unregister'),
  select: triggerOn('click', 'select')
});
