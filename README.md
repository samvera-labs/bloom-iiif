<img src="https://user-images.githubusercontent.com/7376450/160845852-39bf8942-1db4-41ee-881f-889ba2a4f61e.png" class="bloom-screenshot" alt="Bloom screenshot"/>

### :construction: Under Development :construction:
Bloom is still in alpha development. We do not recommend incorporating this into projects yet. You can test it out locally with your IIIF collections.

# Bloom IIIF

**A slider component rendered from a IIIF Collection**

---

<h2 id="development">Development</h2>

Bloom IIIF is built with:

- TypeScript
- [ESBuild](https://esbuild.github.io/)
- [Vault](https://github.com/IIIF-Commons/vault/)
- [Stitches](https://stitches.dev/)

### Environment

This will open up a local dev server with live reloading.

```
npm install
npm run dev
```

### Build

This will build and package the component

```
npm run build
```

#### Notes

- ESBuild compiles TypeScript to JavaScript, but does not do type checking. To view type checking errors (in addtion to what your IDE will be complaining about), run:

```
tsc
```

<h2 id="license">License</h2>

This project is available under the [MIT License](https://github.com/samvera-labs/bloom-iiif/blob/main/LICENSE).
