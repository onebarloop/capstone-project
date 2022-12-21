export default async function cloudUpload(event) {
  const files = event.target.bild.files;

  let urls = [];

  for (const file of files) {
    const formData = new FormData(event.target);
    formData.append("file", file);
    formData.append("upload_preset", "b5zcklfu");
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dt7yjhfbb/image/upload",
      { method: "POST", body: formData }
    );
    const url = await response.json();
    urls.push(url);
  }
  return urls;
}
