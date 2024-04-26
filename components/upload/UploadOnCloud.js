import { nanoid } from "nanoid";

import {
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
  ref,
} from "firebase/storage";

const storage = getStorage();

export const UploadImage = (file, path, progressCallback) => {
  const newPath = path + nanoid();
  const storageRef = ref(storage, newPath);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // Call the progressCallback function with the current progress
        if (progressCallback) {
          progressCallback(progress);
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        reject(error);
      },
      async () => {
        // Retrieve the download URL after successful upload
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        } catch (error) {
          reject(error);
        }
      }
    );
  });
};
