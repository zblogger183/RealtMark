import fs from "node:fs";
import path from "node:path";

/** Checks whether a public/ asset exists on disk — same check HeroBackground uses. */
export function imageExists(imagePath: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", imagePath));
  } catch {
    return false;
  }
}
