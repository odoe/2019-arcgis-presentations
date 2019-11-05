export const config = {
  proxyUrl: "/proxy"
};

export function proxyUrl(url: string): string {
  return `${config.proxyUrl}?${url}`;
}

export { transform } from "legofy";

