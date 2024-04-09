"use client";

import React, { useEffect, useState } from "react";
import fileDownload from "js-file-download";
import axios from "axios";

function ImageDownloadPage({ imageData, title, company, category, field }) {
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
          fileDownload(res.data, `${title.replace(/\s/g, "")}_transformed.jpg`);
        })
        .catch((error) => {
          console.error("Error downloading transformed image:", error);
        });
    }
  };

  const applyTransformations = (publicId) => {
    const transformationParams = publicId.split("/");
    const overlayParam = transformationParams[1];
    // Construct the URL with the required transformations
    if (category === "speaker") {
      if (field === "marketer") {
        const transformedImageUrl =
          `https://res.cloudinary.com/dcijnycwn/image/upload/` +
          `l_iecna_upload:${overlayParam}/fl_layer_apply,w_209,h_209,x_315,y_-34,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_315,y_165/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_315,y_200/gg8clyhd7dsgvqxoepvl.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      } else {
        const transformedImageUrl =
          `https://res.cloudinary.com/dcijnycwn/image/upload/` +
          `l_iecna_upload:${overlayParam}/fl_layer_apply,w_209,h_209,x_315,y_-34,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_315,y_165/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_315,y_200/ujjsezrz2sdvetteyqus.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      }
    }

    if (category == "delegate") {
      if (field === "marketer") {
        const transformedImageUrl =
          `https://res.cloudinary.com/dcijnycwn/image/upload/` +
          `l_iecna_upload:${overlayParam}/fl_layer_apply,w_209,h_209,x_315,y_-34,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_315,y_120/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_315,y_160/ibukv8ikxfokaafak5s4.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      } else {
        const transformedImageUrl =
          `https://res.cloudinary.com/dcijnycwn/image/upload/` +
          `l_iecna_upload:${overlayParam}/fl_layer_apply,w_209,h_209,x_315,y_-34,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_315,y_120/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_315,y_160/ibukv8ikxfokaafak5s4.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      }
    }

    if (category === "nomination") {
      if (field === "marketer") {
        const transformedImageUrl =
          `https://res.cloudinary.com/dcijnycwn/image/upload/` +
          `l_iecna_upload:${overlayParam}/fl_layer_apply,w_255,h_255,x_0,y_55,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_38_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_0,y_350/j4vk0y1xm7a1snu1q29b.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      } else {
        const transformedImageUrl =
          `https://res.cloudinary.com/dcijnycwn/image/upload/` +
          `l_iecna_upload:${overlayParam}/fl_layer_apply,w_255,h_255,x_0,y_55,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_38_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_0,y_350/j4vk0y1xm7a1snu1q29b.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      }
    }
  };

  return (
    <div
      className="
    flex flex-col w-[100%] max-w-[100%] justify-center items-center gap-4
    "
    >
      {transformedImageUrl && (
        <img
          src={transformedImageUrl}
          alt={title}
          width={300}
          height={200}
          className="object-contain"
        />
      )}

      <button onClick={handleDownloadTransformed} className="newsletterbtn">
        Download Transformed Image
      </button>
    </div>
  );
}

export default ImageDownloadPage;
