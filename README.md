# rotNode
A javascript library for obfuscating emails and other data on a webpage to help reduce bot scraping

## Getting Started

#### Include the javascript file in your page

```html
<script type="application/javascript" src="js/rotNode.js"></script>
```

#### Edit your HTML elements

1. Add the "rot13" class to an element
2. Add data attributes

Any node with the "rot13" class will have the rot13 algorithm applied to all data attributes.

data-inner   | data-foo
------------ | -------------
Adds the given text to the node's innerText | Adds the given text to the node's foo attribute

#### Exempli Gratia

```html
<a class="rot13" data-href="znvygb:uryyb@jbeyq.pbz" data-inner="uryyb@jbeyq.pbz"></a>
```
*becomes*
```html
<a class="rot13" href="mailto:hello@world.com">hello@world.com</a>
```

## Purpose

Bots scrape the web for emails and various other data, and then they spam you. This tool helps to keep your HTML obfuscated from those bots while keeping it perfectly visible to your site's visitors.
