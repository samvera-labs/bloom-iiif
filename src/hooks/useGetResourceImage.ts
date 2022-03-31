import { ContentResource, IIIFExternalWebResource } from "@iiif/presentation-3";

export const useGetResourceImage = (
  resource: IIIFExternalWebResource | IIIFExternalWebResource[],
  size: string = "600,",
  region: string = "full"
) => {
  if (Array.isArray(resource)) resource = resource[0];

  let image = resource.id;

  if (!resource.service) return resource.id;

  if (!Array.isArray(resource.service)) {
    if (resource.service["@id"])
      return `${resource.service["@id"]}/${region}/${size}/0/default.jpg`;

    if (resource.service.id)
      return `${resource.service.id}/${region}/${size}/0/default.jpg`;
  }

  if (resource.service["@id"])
    return `${resource.service["@id"]}/${region}/${size}/0/default.jpg`;

  return `${resource.service[0].id}/${region}/${size}/0/default.jpg`;
};
