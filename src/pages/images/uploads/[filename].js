import fs from "fs";
import path from "path";

export async function getServerSideProps({ res, params }) {
  const { filename } = params || {};
  const filePath = path.join(process.cwd(), "uploads", filename);
  if (!fs.existsSync(filePath)) {
    res.statusCode = 404;
    res.end("Not found");
    return { props: {} };
  }
  const ext = path.extname(filename).toLowerCase();
  const mime =
    ext === ".png"
      ? "image/png"
      : ext === ".jpg" || ext === ".jpeg"
      ? "image/jpeg"
      : ext === ".gif"
      ? "image/gif"
      : ext === ".webp"
      ? "image/webp"
      : "application/octet-stream";
  res.setHeader("Content-Type", mime);
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  await new Promise((resolve, reject) => {
    const stream = fs.createReadStream(filePath);
    stream.on("error", reject);
    stream.on("end", resolve);
    stream.pipe(res);
  });
  return { props: {} };
}

export default function ImageFile() {
  return null;
}
