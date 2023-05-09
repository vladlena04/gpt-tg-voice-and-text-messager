import axios from "axios";
import { createWriteStream } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url))

class OggConverter {
  constructor() {}

  toMP3() {}
  async create(url, filename) {
    try {
      const oggPath = resolve(__dirname, '../voices', `${filename}`)
      const response = await axios({
        method: "get",
        url,
        responseType: "stream",
      })
      const stream = createWriteStream()
    } catch (e) {
      console.log("Error while creating ogg", e.message);
    }
  }
}

export const ogg = new OggConverter();
