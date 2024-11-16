export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')     // Replace spaces with hyphens
    .replace(/-+/g, '-')      // Replace multiple hyphens with single hyphen
    .trim();                  // Trim hyphens from start and end
}

// Example usage:
// slugify("Understanding Data Structures!") => "understanding-data-structures"
// slugify("How to Code in 2023?") => "how-to-code-in-2023"