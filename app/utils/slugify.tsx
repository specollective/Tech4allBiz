export default function slugify(str: string) {
  return str
    .replace(/^\d+-/, "") // Remove leading numbers followed by a hyphen (e.g., "1-")
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Add a hyphen between camelCase words
    .toLowerCase() // Convert to lowercase
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^-\w]+/g, "") // Remove all non-word chars except hyphens
    .replace(/--+/g, "-"); // Replace multiple hyphens with single hyphen
}
