

import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary'; // ✅ you missed this import
import multer from 'multer';

// YOUR_CLOUD_NAME=dpglkhrp5
// YOUR_API_KEY=936995181729711
// YOUR_API_SECRET=kdEOg2ot6pbYv7uRN95Ke19Q-Qc
cloudinary.config({
  cloud_name: "dpglkhrp5",
  api_key: 936995181729711,
  api_secret:"kdEOg2ot6pbYv7uRN95Ke19Q-Qc",
});

console.log(process.env.YOUR_CLOUD_NAME)

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'products',  // Optional: folder in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg'], 
  },
});

export const upload = multer({ storage });
