<img src="https://user-images.githubusercontent.com/7376450/160845852-39bf8942-1db4-41ee-881f-889ba2a4f61e.png" class="bloom-screenshot" alt="Bloom screenshot"/>

### :construction: Under Development :construction:

_Bloom is still in alpha development. We do not recommend incorporating this into projects yet. You can test it out locally with your IIIF collections._

# Bloom IIIF

**A slider component rendered from a IIIF Collection**

---

## Documentation

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Collection Anatomy](#collection-anatomy)
- [Development](#development)

---

<h2 id="installation">Installation</h2>

Install the component from your command line using `npm install`,

```shell
npm install @samvera/bloom-iiif
```

**OR** if you prefer Yarn, use `yarn add`.

```shell
yarn add @samvera/bloom-iiif
```
---

<h2 id="basic-usage">Basic Usage</h2>

Add the BloomIIIF component to your `jsx` or `tsx` code.

```jsx
import BloomIIIF from "@samvera/bloom-iiif";
```

Mnimal usage providing the `<BloomIIIF/>` component with an external manifest.

```jsx
const collectionId = `https://raw.githubusercontent.com/samvera-labs/bloom-iiif/main/public/fixtures/iiif/collection/masks-of-antonio-fava.json`;

return <BloomIIIF collectionId={collectionId} />;
```

---



<h2 id="collection-anatomy">Collection Anatomy</h2>

Bloom accepts both Presentation API 2.x and Presentation API 3.0 Collections.

[See Example Collection](https://github.com/samvera-labs/bloom-iiif/blob/main/public/fixtures/iiif/collection/masks-of-antonio-fava.json)

### Header

#### Text

The [top-level **label** and **summary**](https://github.com/samvera-labs/bloom-iiif/blob/main/public/fixtures/iiif/collection/masks-of-antonio-fava.json#L5-L12) (if existing) data is mapped to a Header sub-component

```json
"label": {
  "none": ["Commedia dell'Arte: The Masks of Antonio Fava"]
}
```

```json
"summary": {
  "none": [
    "The Commedia dell'Arte, the famous improvisational theatre style born in Renaissance Italy, remains a major influence in today's theatre. Antonio Fava is an actor, comedian, author, director, musician, mask maker and Internationally renowned Maestro of Commedia dell'Arte."
  ]
}
```

#### Link

The [top-level **hompage**](https://github.com/samvera-labs/bloom-iiif/blob/main/public/fixtures/iiif/collection/masks-of-antonio-fava.json#L13-L20) represents the `href` attribute wrapping an HTML `<a>` element on the Header **label**

```json
"homepage": [
  {
    "id": "https://dc.library.northwestern.edu/collections/c373ecd2-2c45-45f2-9f9e-52dc244870bd",
    "type": "Text",
    "label": { "none": ["Commedia dell'Arte: The Masks of Antonio Fava"] },
    "format": "text/html"
  }
]
```

### Items

The [**items** array](https://github.com/samvera-labs/bloom-iiif/blob/main/public/fixtures/iiif/collection/masks-of-antonio-fava.json#L21-L292) is mapped to the slider/carousel with each item render an HTML `<figure>`

```json
"items": [
  {
    "id": "https://iiif.stack.rdc.library.northwestern.edu/public/72/98/fd/ce/-a/dc/1-/45/01/-9/e1/4-/9e/8b/d9/85/e1/49-manifest.json",
    "type": "Manifest",
    "label": { "none": ["Pantalone classico"] },
    "summary": { "none": ["Image"] },
    "thumbnail": [
      {
        "id": "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/180682c9-dfaf-4881-b7b6-1f2f21092d4f/full/200,/0/default.jpg",
        "type": "Image",
        "format": "image/jpeg",
        "service": [
          {
            "id": "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/180682c9-dfaf-4881-b7b6-1f2f21092d4f",
            "profile": "http://iiif.io/api/image/2/level2.json",
            "type": "ImageService2"
          }
        ],
        "width": 200,
        "height": 200
      }
    ],
    "homepage": [
      {
        "id": "https://dc.library.northwestern.edu/items/7298fdce-adc1-4501-9e14-9e8bd985e149",
        "type": "Text",
        "label": { "none": ["Pantalone classico"] },
        "format": "text/html"
      }
    ]
  }
]
```

#### Text

For each item, the [**label** and **summary**](https://github.com/samvera-labs/bloom-iiif/blob/main/public/fixtures/iiif/collection/masks-of-antonio-fava.json#L25-L26) (if existing) data are mapped to a `<figcaption>`

```json
"label": { "none": ["Pantalone classico"] },
```

```json
"summary": { "none": ["Image"] },
```

#### Image

For each item, the [**thumbnail**](https://github.com/samvera-labs/bloom-iiif/blob/main/public/fixtures/iiif/collection/masks-of-antonio-fava.json#L27-L42) is rendered as an `<img />` element within the `<figure>`

```json
"thumbnail": [
  {
    "id": "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/180682c9-dfaf-4881-b7b6-1f2f21092d4f/full/200,/0/default.jpg",
    "type": "Image",
    "format": "image/jpeg",
    "service": [
      {
        "id": "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/180682c9-dfaf-4881-b7b6-1f2f21092d4f",
        "profile": "http://iiif.io/api/image/2/level2.json",
        "type": "ImageService2"
      }
    ],
    "width": 200,
    "height": 200
  }
],
```

#### Link

The [**hompage**](https://github.com/samvera-labs/bloom-iiif/blob/main/public/fixtures/iiif/collection/masks-of-antonio-fava.json#L43-L50) for each item represents the `href` attribute of the HTML `<a>` element wrapping `<figure>`

```json
"homepage": [
  {
    "id": "https://dc.library.northwestern.edu/items/7298fdce-adc1-4501-9e14-9e8bd985e149",
    "type": "Text",
    "label": { "none": ["Pantalone classico"] },
    "format": "text/html"
  }
]
```

---

<h2 id="development">Development</h2>

Bloom IIIF is built with:

- TypeScript
- [ESBuild](https://esbuild.github.io/)
- [Vault](https://github.com/IIIF-Commons/vault/)
- [Stitches](https://stitches.dev/)

### Environment

This will open up a local dev server with live reloading.

```shell
npm install
npm run dev
```

### Build

This will build and package the component

```shell
npm run build
```

#### Notes

ESBuild compiles TypeScript to JavaScript, but does not do type checking. To view type checking errors (in addtion to what your IDE will be complaining about), run:

```shell
tsc
```

<h2 id="license">License</h2>

This project is available under the [MIT License](https://github.com/samvera-labs/bloom-iiif/blob/main/LICENSE).
