// Don't modify this file! It is a helper function to fetch our products from GitHub.

import type { FetchOption } from "../general.types";

/**
 * Fetches the products from the GitHub repository. If a fetch option is provided, it will fetch a single product.
 * @param fetchOption - An object with an `id` property; the id will be used to fetch the product associated with the id. If null, fetch all products.
 * @returns The desired product(s). If a fetch option is provided, a single product will be returned; if not found, null will be returned.
 * If no fetch option is provided, all products will be returned.
 */
export default async function getProducts<T>(fetchOption: FetchOption = null): Promise<T> {
  let url = "https://api.github.com/repos/MarkE16/exe-react-workshop-demo-data/contents"; // Fetch all products by default

  if (fetchOption) {
    url += `/${fetchOption.id}.json`; // Fetch a single product
  }

  const response = await fetch(url);
  const data = await response.json();

  // If the data is an array, then it's a list of products, otherwise it's a single product.
  if (Array.isArray(data)) {
    const dataPromises = data.map((jsonFile) => {
      return fetch(jsonFile.download_url).then((response) => response.json());
    });

    return await Promise.all(dataPromises) as T;
  }

  return await fetch(data.download_url).then((response) => response.json());
}