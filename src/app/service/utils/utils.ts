export const serviceImage = (filename?: string) => {
  if (!filename) return "/services/placeholder.jpg";

  // If already a full URL (starts with http), use it directly
  if (filename.startsWith("http")) return filename;

  // If it's just a filename, prepend the public path
  if (!filename.startsWith("/")) return `/services/${filename}`;

  return filename;
};
