"use client";

import React, { useEffect, useState } from "react";
import fileDownload from "js-file-download";
import axios from "axios";
import { firestore } from "../../../firbase/clientApp";

function ImageDownloadPage({
  imageData,
  title,
  company,
  category,
  field,
  marco,
  rem,
  email,
}) {
  const [transformedImageUrl, setTransformedImageUrl] = useState(null);
  const [displayed, setDisplayed] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // useEffect(() => {

  // }, [transformedImageUrl]);

  useEffect(() => {
    const uploadImage = async () => {
      const formData = new FormData();
      formData.append("upload_preset", "iecna_upload_uae");
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
        setErrorMessage(
          "Error uploading image. Please try again. After reloading the page."
        );
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
          `l_iecna_upload_uae:${overlayParam}/fl_layer_apply,ar_1.0,c_lfill,w_209,h_209,x_315,y_-34,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_315,y_165/co_rgb:FFFFFF,l_text:arial_24_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_315,y_195/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
            marco
          )}/fl_layer_apply,x_315,y_225/wcrcs6s5lhxhblavydiv.jpg`;

        //   const transformedImageUrl =
        // `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
        // `l_iecna_upload_uae:${overlayParam}/fl_layer_apply,ar_1.0,c_lfill,w_338,h_338,x_280,y_-68,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_34_bold_normal_left:${encodeURIComponent(
        //   title
        // )}/fl_layer_apply,x_280,y_165/co_rgb:FFFFFF,l_text:arial_34_bold_normal_left:${encodeURIComponent(
        //   company
        // )}/fl_layer_apply,x_280,y_205/pbs2kxsy5kyqs7rvthx8.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      } else {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_uae:${overlayParam}/fl_layer_apply,ar_1.0,c_lfill,w_209,h_209,x_315,y_-34,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_24_bold_normal_left:${encodeURIComponent(
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
          `l_iecna_upload_uae:${overlayParam}/fl_layer_apply,ar_1.0,c_lfill,w_338,h_338,x_280,y_-69,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_34_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_280,y_165/co_rgb:FFFFFF,l_text:arial_34_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_280,y_205/co_rgb:FFFFFF,l_text:arial_34_bold_normal_left:${encodeURIComponent(
            marco
          )}/fl_layer_apply,x_280,y_246/pecxgiu1val4mqga90b6.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      } else {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_uae:${overlayParam}/fl_layer_apply,ar_1.0,c_lfill,w_338,h_338,x_280,y_-69,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_34_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_280,y_165/co_rgb:FFFFFF,l_text:arial_34_bold_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_280,y_205/pecxgiu1val4mqga90b6.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      }
    }

    if (category === "nomination") {
      if (field === "marketer") {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_uae:${overlayParam}/fl_layer_apply,ar_1.0,c_lfill,w_360,h_360,x_-6,y_52,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_34_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_-6,y_310/co_rgb:FFFFFF,l_text:arial_34_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_-6,y_355/co_rgb:FFFFFF,l_text:arial_34_bold_normal_left:${encodeURIComponent(
            marco
          )}/fl_layer_apply,x_-6,y_390/gvygnmjrbxwcchagyvsi.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      } else {
        const transformedImageUrl =
          `https://res.cloudinary.com/dmedpnbvc/image/upload/` +
          `l_iecna_upload_uae:${overlayParam}/fl_layer_apply,ar_1.0,c_lfill,w_360,h_360,x_-6,y_52,r_max/c_scale/co_rgb:FFFFFF,l_text:arial_34_bold_normal_left:${encodeURIComponent(
            title
          )}/fl_layer_apply,x_-6,y_330/co_rgb:FFFFFF,l_text:arial_34_bold_normal_left:${encodeURIComponent(
            company
          )}/fl_layer_apply,x_-6,y_380/gvygnmjrbxwcchagyvsi.jpg`;

        setTransformedImageUrl(transformedImageUrl);
      }
    }
  };

  const handleImageLoad = () => {
    // Call your function here after the image has loaded
    console.log("Transformed image loaded!");
    setDisplayed(false);
    if (transformedImageUrl !== null) {
      const trfRef = firestore.collection("uae-transformed-images");
      trfRef
        .where("trf", "==", rem)
        .get()
        .then((querySnapshot) => {
          if (querySnapshot.empty) {
            // Check if no documents with the same trf value exist
            const newTrfRef = trfRef.doc(); // Generate a new document reference
            const trfId = newTrfRef.id;
            console.log(trfId);
            newTrfRef
              .set({
                id: trfId,
                name: title,
                url: transformedImageUrl,
                trf: rem,
                email: email,
              })
              .catch((error) => {
                console.error("Error setting document:", error);
              });
          }
        })
        .catch((error) => {
          console.error("Error checking documents:", error);
        });
    } else {
      setErrorMessage(
        "Error loading transformed image. Please try again. After reloading the page."
      );
    }
  };

  return (
    <div className=" relative w-[100%] h-fit  max-h-[30vh] sm:max-h-[70vh] pb-[10vh]  justify-center items-center gap-4">
      {transformedImageUrl && (
        <img
          src={transformedImageUrl}
          alt={title}
          className={`object-contain w-[100%] max-h-[25vh] h-[60vh] sm:max-h-[60vh]`}
          onLoad={handleImageLoad} // Call handleImageLoad function when the image is loaded
        />
      )}

      <button
        onClick={handleDownloadTransformed}
        className="newsletterbtn w-full absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black/30 text-white p-2 rounded-md"
      >
        Download Poster
      </button>

      {/* {displayed && (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-2xl">Generating Banner...</p>
        </div>
      )}

      {errorMessage && (
        <div className="w-full h-full flex justify-center items-center">
          <p className="text-2xl text-red-500">{errorMessage}</p>
        </div>
      )} */}
    </div>
  );
}

export default ImageDownloadPage;
