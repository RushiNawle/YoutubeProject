import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs"; // to deal with file handling fs stand for file system

// configuration
cloudinary.config({
  // we have stored sensitive info in the .env file
  cloud_name: `${process.env.CLOUD_NAME}`,
  api_key: `${process.env.API_KEY}`,
  api_secret: `${process.env.API_SECRET}`, // Click 'View API Keys' above to copy your API secret
});

const uploadCloudinary = async(localFilePath) => {
  try {
    if (!localFilePath) return null;

     const response=await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    console.log("File Uploaded Successfully",response.url);
    return response.url
  } catch (error) {
    fs.unlinkSync(localFilePath)//remove the locally saved   temprory  file as the upload operation got failed
    return null;
  }
};

export {uploadCloudinary}