import { fileURLToPath } from "node:url"
import path from "node:path";

export function makeDirname(url = '') {
    return path.dirname(fileURLToPath(url));
}
