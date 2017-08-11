# What's here

A bunch of csstips that you can use with TypeStyle. What is a csstip?

- A function that returns a mixin (e.g. `padding`)
- A mixin (e.g. flexbox stuff).
- Functions to make page setup easier (`setupPage`) and CSS designs consistent (`normalize`).

# Quick exploration 

Just use TypeScript autocomplete e.g 

```ts
import * as csstips from "csstips" 
import {style} from "typestyle" 

<div className={style(csstips.scroll)}>
  .....Insert a big block of dom here....
<div>
```

It essentially makes it easier for: 
- Beginners to explore CSS.
- Experts to review CSS / intent.
- Provides examples for how to create mixins / mixin creating functions for TypeStyle.

# Docs 

[https://typestyle.github.io](https://typestyle.github.io)
