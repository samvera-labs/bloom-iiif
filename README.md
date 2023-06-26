<img src="https://user-images.githubusercontent.com/7376450/189417239-0dcf980a-5551-4ebd-923d-5e33bc37bd59.png" class="bloom-screenshot" alt="Bloom screenshot"/>

# Bloom IIIF

**UI componentry for IIIF Collections**

#### [Demo](https://samvera-labs.github.io/bloom-iiif) | [Code](https://github.com/samvera-labs/bloom-iiif)

_Note, Bloom is still in early development._

---

## Documentation

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [IIIF Collection Anatomy](#collection-anatomy)
- [Development](#development)

---

<h2 id="installation">Installation</h2>

Install the component from your command line using `npm install`,

```shell
npm install @samvera/bloom-iiif
```

```shell
yarn add @samvera/bloom-iiif
```

**OR** if you prefer Yarn, use `yarn add`.

---

<h2 id="basic-usage">Basic Usage</h2>

Add the BloomIIIF component to your `jsx` or `tsx` code. Bloom does require you to load swiper.js styling to the side. These stylesheets are not compiled with the @samvera/bloom-iiif package, however are bundled as a dependency when installing Bloom.

```jsx
import BloomIIIF from "@samvera/bloom-iiif";

// import swiper.js styling
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";
```

Minimal usage providing the `<BloomIIIF/>` component with an external manifest.

```jsx
const collectionId = `https://raw.githubusercontent.com/samvera-labs/bloom-iiif/main/public/fixtures/iiif/collection/masks-of-antonio-fava.json`;

return <BloomIIIF collectionId={collectionId} />;
```

<h3>Responsive breakpoints</h3>
Bloom uses default values per <a href="https://swiperjs.com/swiper-api#param-breakpoints" target="_blank">Swiper's `breakpoints` API </a>.  You may customize your own by passing in a `breakpoints` object, ie:

```jsx
const myBreakpoints = {
  320: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  480: {
    slidesPerView: 3,
    spaceBetween: 30
  },
  640: {
    slidesPerView: 4,
    spaceBetween: 40
  }
};

<BloomIIIF
  collectionId={...}
  options={{
    breakpoints: myBreakpoints
  }}
/>
```

<h3>Item Interaction Callback (optional)</h3>

The default behavior for a click (or press) event on each of the individual items is to route to the `href` value set by the IIIF Presentation 3.0 API `homepage[0].id` for each `item` entry.

You can optionally set an event handler for the `onItemInteraction` value as a callback for a custom action. The full `item` object will be passed back to the consuming application.

#### Example usage of `onItemInteraction` callback:

```jsx
import BloomIIIF from "@samvera/bloom-iiif";

// import swiper.js styling
import "swiper/css";
import "swiper/css/lazy";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MyApp = () => {
  const collectionId =
    "https://api.dc.library.northwestern.edu/api/v2/collections/c373ecd2-2c45-45f2-9f9e-52dc244870bd?as=iiif";
  const handleItemInteraction = (item: Manifest | Collection) => {
    console.log(`item`, item);
    // do something with `item`
  };

  return (
    <BloomIIIF
      collectionId={collectionId}
      onItemInteraction={handleItemInteraction}
    />
  );
};
```

#### Example `item` return value:

```json
{
  "id": "https://api.dc.library.northwestern.edu/api/v2/works/2de0355c-8e48-4478-93af-8cbd1437bd16?as=iiif",
  "type": "Manifest",
  "homepage": [
    {
      "id": "https://dc.library.northwestern.edu/items/2de0355c-8e48-4478-93af-8cbd1437bd16",
      "type": "Text",
      "format": "text/html",
      "label": {
        "none": ["Pulcinella \"tiepolano\""]
      }
    }
  ],
  "label": {
    "none": ["Pulcinella \"tiepolano\""]
  },
  "summary": {
    "none": ["Image"]
  },
  "thumbnail": [
    {
      "id": "https://api.dc.library.northwestern.edu/api/v2/works/2de0355c-8e48-4478-93af-8cbd1437bd16/thumbnail",
      "format": "image/jpeg",
      "type": "Image",
      "width": 400,
      "height": 400
    }
  ]
}
```

<h3>Next.js</h3>

Usage with Next.js requires a dynamic import using `next/dynamic`

```jsx
import dynamic from "next/dynamic";

const BloomIIIF = dynamic(() => import("@samvera/bloom-iiif"), {
  ssr: false,
});

return <BloomIIIF collectionId={collectionId} />;
```

---

<h2 id="collection-anatomy">IIIF Collection Anatomy</h2>

Bloom accepts both Presentation API 2.x and Presentation API 3.0 Collections.

[See Example Collection](https://github.com/samvera-labs/bloom-iiif/blob/main/public/fixtures/iiif/collection/masks-of-antonio-fava.json)

### Header

#### Text

The [top-level Collection **label** and **summary**](https://github.com/samvera-labs/bloom-iiif/blob/main/public/fixtures/iiif/collection/masks-of-antonio-fava.json#L5-L12) (if existing) data is mapped to a Header sub-component

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

The [top-level Collection **homepage**](https://github.com/samvera-labs/bloom-iiif/blob/main/public/fixtures/iiif/collection/masks-of-antonio-fava.json#L13-L20) represents the `href` attribute wrapping an HTML `<a>` element on the Header **label**

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

The [**items** array](https://github.com/samvera-labs/bloom-iiif/blob/main/public/fixtures/iiif/collection/masks-of-antonio-fava.json#L21-L292) is mapped to the slider/carousel with each item rendering as an HTML `<figure>`

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
"label": { "none": ["Pantalone classico"] }
```

```json
"summary": { "none": ["Image"] }
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
]
```

#### Link

The [**homepage**](https://github.com/samvera-labs/bloom-iiif/blob/main/public/fixtures/iiif/collection/masks-of-antonio-fava.json#L43-L50) for each item represents the `href` attribute of the HTML `<a>` element wrapping `<figure>`

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
- [Nectar IIIF](https://github.com/samvera-labs/nectar-iiif/)
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
