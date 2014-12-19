# ember-button-select

A button select component for your ember app.

## Installation

* `npm install --save ember-button-select`

## Usage

In your template:

```hbs
{{#button-select selected=period}}
  {{#button-option value='week'}}Week{{/button-option}}
  {{#button-option value='month'}}Month{{/button-option}}
  {{#button-option value='year'}}Year{{/button-option}}
{{/button-select}}

{{!-- OR --}}
{{#button-select selected=period}}
  {{button-option label='Week' value='week'}}
  {{button-option label='Month' value='month'}}
  {{button-option label='Year' value='year'}}
{{/button-select}}
```

When one of the button options is selected, it will have the 'selected' class set on it. In addition, the `selected` binding that gets passed into the `button-select` component will be updated to the selected buttons `value`.

Styling is left completely to you.
