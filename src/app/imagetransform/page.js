"use client";

import React, { useEffect, useState } from "react";
import fileDownload from "js-file-download";
import axios from "axios";

function ImageDownloadPage({ imageData, title, text }) {
  const [transformedImageUrl, setTransformedImageUrl] = useState(null);

  useEffect(() => {
    const uploadImage = async () => {
      const formData = new FormData();
      formData.append("upload_preset", "iecna_upload");
      formData.append("file", imageData);

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dcijnycwn/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();

        applyTransformations(data.public_id);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };

    uploadImage();
  }, [imageData]);

  const handleDownload = () => {
    fileDownload(imageData, `${title}.jpg`);
  };

  const handleDownloadTransformed = () => {
    if (transformedImageUrl) {
      axios
        .get(transformedImageUrl, {
          responseType: "blob",
        })
        .then((res) => {
          fileDownload(res.data, `${title}_transformed.jpg`);
        })
        .catch((error) => {
          console.error("Error downloading transformed image:", error);
        });
    }
  };

  const applyTransformations = (publicId) => {
    const textOverlay = "#IECNA"; // Replace "Your Name" with your actual name
    const transformationParams = publicId.split("/");
    const overlayParam = transformationParams[1];
    // Construct the URL with the required transformations
    const transformedImageUrl =
      `https://res.cloudinary.com/dcijnycwn/image/upload/` +
      `l_iecna_upload:${overlayParam}/fl_layer_apply,w_225,h_225,x_289,y_-5,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
        textOverlay
      )}/fl_layer_apply,x_295,y_195/hm42iinqwqnvlnynbhwz.jpg`;

    setTransformedImageUrl(transformedImageUrl);
  };

  return (
    <div
      className="
    flex flex-col w-[100%] max-w-[100%] justify-center items-center gap-4
    "
    >
      {transformedImageUrl && (
        <img src={transformedImageUrl} alt={title} width="80%" height={200} />
      )}

      <button onClick={handleDownloadTransformed} className="newsletterbtn">
        Download Transformed Image
      </button>
    </div>
  );
}

export default ImageDownloadPage;
