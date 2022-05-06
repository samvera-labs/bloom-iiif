import { CanvasNormalized } from "@iiif/presentation-3";

export const getCanvasResource = (canvas: CanvasNormalized, vault) => {
  if (canvas.thumbnail.length !== 0) return canvas.thumbnail;
  const annotationPage = vault.get(canvas.items[0]);
  const annotation = vault.get(annotationPage.items[0]);
  return annotation.body;
};
