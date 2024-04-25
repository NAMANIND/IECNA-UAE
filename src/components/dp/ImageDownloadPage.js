"use client";

import React, { Component, useEffect, useState } from "react";
import fileDownload from "js-file-download";
import axios from "axios";

function ImageDownloadPage({
  imageData,
  title,
  company,
  category,
  field,
  marco,
}) {
  const [transformedImageUrl, setTransformedImageUrl] = useState(null);

  useEffect(() => {
    const uploadImage = async () => {
      const formData = new FormData();
      formData.append("upload_preset", "iecna_upload_india");
      formData.append("file", imageData);

      try {
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dmedpnbvc/image/upload",
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
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_india:${overlayParam}/fl_layer_apply,w_209,h_209,x_315,y_-34,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_315,y_165/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_315,y_195/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            marco
          )}/fl_layer_apply,x_315,y_225/wcrcs6s5lhxhblavydiv.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      } else {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_india:${overlayParam}/fl_layer_apply,w_209,h_209,x_315,y_-34,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_315,y_165/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_315,y_195/v3009svglfx5ca3zcgkt.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      }
    }

    if (category == "delegate") {
      if (field === "marketer") {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_india:${overlayParam}/fl_layer_apply,w_209,h_209,x_315,y_-34,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_315,y_120/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_315,y_160/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            marco
          )}/fl_layer_apply,x_315,y_200/kknzlrusshihcqhc9pqx.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      } else {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_india:${overlayParam}/fl_layer_apply,w_209,h_209,x_315,y_-34,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_315,y_120/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_315,y_160/kknzlrusshihcqhc9pqx.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      }
    }

    if (category === "nomination") {
      if (field === "marketer") {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_india:${overlayParam}/fl_layer_apply,w_255,h_255,x_0,y_55,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_38_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_0,y_350/rv2jsrolmrhfvcrycfbs.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      } else {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_india:${overlayParam}/fl_layer_apply,w_255,h_255,x_0,y_55,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_38_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_0,y_350/rv2jsrolmrhfvcrycfbs.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      }
    }
  };

  const component = (
    <div className=" relative w-[100%] h-fit max-h-[70vh] pb-[10vh]  justify-center items-center gap-4">
      {transformedImageUrl && (
        <img
          src={transformedImageUrl}
          alt={title}
          className={`object-contain w-[100%] h-[60vh] max-h-[60vh]`}
        />
      )}

      <button
        onClick={handleDownloadTransformed}
        className=" newsletterbtn w-full
  absolute -bottom-2 left-1/2   -translate-x-1/2 bg-black/30 text-white p-2 rounded-md"
      >
        Download Poster
      </button>
    </div>
  );

  return [component, transformedImageUrl];
}

export default ImageDownloadPage;
