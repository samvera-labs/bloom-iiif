# Bloom IIIF

**A slider component rendered from a IIIF Collection**

---

<h2 id="development">Development</h2>

Clover IIIF is built with:

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
