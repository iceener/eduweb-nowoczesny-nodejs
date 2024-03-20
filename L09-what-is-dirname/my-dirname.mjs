import { fileURLToPath } from "node:url"
import path from "node:path";

export function makeDirname(url = '') {
    const __filename = fileURLToPath(url);
    const __dirname = path.dirname(__filename);
    return { __filename, __dirname }
}
