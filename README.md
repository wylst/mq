### mq
< 200 byte DOM manipulation.

#### Usage

Use a single dollar sign to get a single element (first match) by CSS selector:
```js
var el = $('header nav');
```

Use a double dollar sign to get a NodeList of all elements matching the CSS selector:
```js
var items = $$('header nav li');
```

Operate directly on NodeLists using Array's `forEach` and `map` functions:
```js
var items = $$('header nav li');
items.forEach(function(el) {
    console.log(el.innerHTML);
});
```

On a single element, use any property or function you'd normally use on an Element, HTMLElement, etc. (`addEventListener`, `innerHTML`, `classList`, `offsetTop`).

#### Drawbacks
- No standardization of methods/outputs (we are relying on the unrelyable fact that browsers will behave in the same way).
- No shortcuts

#### Benefits
- Tiny size
- Performance
- 'Standard' JavaScript &mdash; survive without needing jQuery!
