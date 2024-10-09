"use server";
import sharp from "sharp";
import { promises as fsPromises } from "fs";
import path from "path";

function bufferToBase64(buffer, type = "image/png") {
  return `data:${type};base64,${buffer.toString("base64")}`;
}

/**
 * getFileBufferLocal 取得本地檔案的 buffer
 * @param {string} filepath
 * @returns buffer
 */
async function getFileBufferLocal(filepath) {
  const realFilepath = path.join(process.cwd(), "public", filepath);
  return fsPromises.readFile(realFilepath);
}

/**
 * getFileBufferRemote 取得遠端檔案的 buffer
 * @param {string} url
 * @returns buffer
 */
async function getFileBufferRemote(url) {
  const response = await fetch(url);
  const arrBuffer = await response.arrayBuffer();
  return Buffer.from(arrBuffer);
}

function getFileBuffer(src) {
  const isRemote = src.startsWith("http");
  return isRemote ? getFileBufferRemote(src) : getFileBufferLocal(src);
}

export default async function getPlaceholderImage(path) {
  try {
    const originalBuffer = await getFileBuffer(path);
    const resizedBuffer = await sharp(originalBuffer).resize(100).toBuffer();
    return {
      src: path,
      placeholder: bufferToBase64(resizedBuffer),
    };
  } catch (error) {
    return {
      // 預設圖檔
      src: filepath,
      placeholder:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==",
    };
  }
}
