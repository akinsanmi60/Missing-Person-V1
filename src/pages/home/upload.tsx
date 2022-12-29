import { useEffect, useState } from "react";
import axios from "axios";

export default function UploadImages() {
  const [images, setImages] = useState<File[]>([]);
  const [ImageURLs, setImageURLs] = useState<string[]>([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls: string[] = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e: { target: { files: any } }) {
    setImages([...e.target.files]);
  }

  const handleSubmit = () => {
    const formData = new FormData();
    // formData.append('category', category)
    Array.from(images).forEach(item => {
      formData.append("products", item);
    });

    const url = "http://localhost:3500/user/image";
    axios
      .post(url, formData)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <h1>Upload</h1>
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
      <button onClick={handleSubmit}>Upload</button>
      {ImageURLs.map((itemSrc, index) => (
        <div key={index}>
          <div style={{ display: "flex" }}>
            <img
              src={itemSrc}
              alt=""
              style={{
                display: "inline-block",
                width: "30%",
                height: "50x",
                marginTop: "19px",
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export function CloudinaryUploadImages() {
  const [images, setImages] = useState<File[]>([]);
  const [ImageURLs, setImageURLs] = useState<string[]>([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls: string[] = [];
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e: { target: { files: any } }) {
    setImages([...e.target.files]);
  }

  const uploadSubmit = () => {
    console.log(`---------------`, images);
    const formData = new FormData();
    Array.from(images).forEach(item => {
      formData.append("products", item);
    });

    formData.append("upload_preset", "dataNigeria"); // Replace the preset name with your own
    formData.append("api_key", "611333157543314");

    fetch("https://res.cloudinary.com/akinsanmi100/image/upload/", {
      method: "post",
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(data.url.toString());
      });

    // axios
    //   .post("https://res.cloudinary.com/akinsanmi100/image/upload/", formData, {
    //     headers: { "X-Requested-With": "XMLHttpRequest" },
    //   })
    //   .then(response => {
    //     const data = response.data;
    //     const fileURL = data.secure_url; // You should store this URL for future references in your app
    //     console.log(data);
    //     console.log(fileURL);
    //   });
  };

  return (
    <>
      <h1>Upload</h1>
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
      <button onClick={uploadSubmit}>Upload</button>
      {ImageURLs.map((itemSrc, index) => (
        <div key={index}>
          <div style={{ display: "flex" }}>
            <img
              src={itemSrc}
              alt=""
              style={{
                display: "inline-block",
                width: "30%",
                height: "50x",
                marginTop: "19px",
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
}
