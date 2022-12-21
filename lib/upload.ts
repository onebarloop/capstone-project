export default async function cloudUpload(files: Blob[]): Promise<string[]> {
  let urls = [];

  for (const file of files) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "b5zcklfu");
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dt7yjhfbb/image/upload",
      { method: "POST", body: formData }
    );
    const data = await response.json();
    urls.push(data.public_id);
  }
  return urls;
}
