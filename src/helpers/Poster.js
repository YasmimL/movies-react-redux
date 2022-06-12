export function renderPost(path, size = "small") {
  if (size === "small") {
    return `https://image.tmdb.org/t/p/w220_and_h330_face${path}`;
  }

  return `https://image.tmdb.org/t/p/w300_and_h450_bestv2${path}`;
}
