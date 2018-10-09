[![GitHub release](https://img.shields.io/github/release/ETCDEVTeam/hashicon.svg)](https://github.com/ETCDEVTeam/hashicon/releases)
[![npm](http://img.shields.io/npm/v/hashicon.svg)](https://www.npmjs.com/package/hashicon)
[![License](https://img.shields.io/npm/l/hashicon.svg)](LICENSE)



Hashicon
==========

> Generates a beautiful representation of any hash.

Check out the [demo website](https://ETCDEVTeam.github.io/hashicon/examples/) to try it out with your own hash and to see some examples.

Further examples [here](examples/index.html).

![Sample hashicon image](examples/hashicons.png "Hashicons")



Browser
---

Install with: 
```shell
$ npm install hashicon
```   

Or, include the CDN:

```html
<script src="//unpkg.com/hashicon"></script>
```   

Or, download the [current build](dist/hashicon.umd.js).


Usage
---

The hash value can include or omit the `0x` prefix.
```js
const hash = "0xdc53525847b67a9e32d80066202d5744c86ae500";
```

Create a `hashicon` with default params:
```js
var icon = hashicon(hash); // icon is a canvas element
```

Or, pass custom params:
```js
const params = {...};
var icon = hashicon(hash, params);
```

Finally, append the newly created `hashicon` to the HTML document:
```js
document.body.appendChild(icon); 
document.body.appendChild(icon, 80); // 80px (with HiDPI/retina adjustments)
```


Params
---
> See [default params](src/params.js)

```js
// TODO: add descriptions
{
	hue: { min: 0, max: 360 },
	saturation: { min: 70, max: 100 },
	lightness: { min: 45, max: 65 },
	variation: { min: 2, max: 6, enabled: true },
	shift: { min: 150, max: 210 },
	figurealpha: { min: .7, max: 1.2 },
	light:{ top:10, right:-8, left:-4, enabled: true}
}
```

Node
---

> TODO: node-canvas example

Install with: 

```shell
$ npm install hashicon
```   

See ESM+CJS builds [here](dist).


Development
-----------

1. Install package dependencies locally:
```shell
$ npm install
```

2. Start development environment:
```shell
$ npm run dev
```

3. Open http://localhost:3000

> Changes are built in "dev" folder with sourcemaps and are live-reloaded.

Build
-----

```shell
$ npm run build
```

> Builds package into `dist/` folder.

License
-----
See [LICENSE](LICENSE)


