---
head:
  - - link
    - rel: icon
      href: favicon.ico
---




# @obewds/tw-bg-palette-monochromatic

Welcome to the docs page for OBE:WDS's `twBgPaletteMonochromatic` component for [Vue.js](https://vuejs.org/)!

<br>




## Installation

```bash
npm install @obewds/tw-bg-palette-monochromatic --save-dev
```

<br>




## Object Schema

The object returned when importing Tailwind CSS background monochromatic color palette has the following schema:

```javascript
{
    'monochromatic': {
        colors: {
            'default': '',
            'error': '...',
            'primary': '...',
            'secondary': '...',
            'success': '...',
        },
    },
}
```

<br>





## Use Example

```html{3,8,16}
<script setup lang="ts">

    import { twBgPaletteMonochromatic } from '@obewds/tw-bg-palette-monochromatic'

    const props = defineProps({
        bgClasses: {
            type: String,
            default: twBgPaletteMonochromatic.monochromatic.colors.primary,
        },
    })

</script>

<template>

    <div :class="bgClasses">
        {{ bgClasses }}
    </div>

</template>
```




## Uninstall

```bash
npm uninstall @obewds/tw-bg-palette-monochromatic
```



<!--
## Markdown Examples

::: tip
This is a tip
:::

::: info
This is an info box
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: tip CUSTOM TITLE
This is a dangerous warning
:::

::: details
This is a details block, which does not work in Internet Explorer or old versions of Edge.
:::

::: details Click me to view the code

```js
console.log('Hello, VitePress!')
```

:::
-->
