import PropTypes from "prop-types";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { useDropzone } from "react-dropzone";

// @mui
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import LinearProgress from "@mui/material/LinearProgress";
//
import Image from "../Image";
import Iconify from "../Iconify";
import RejectionFiles from "./RejectionFiles";
import uuidv4 from "../../utils/uuidv4";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  // width: 276,
  // height: 50,
  // margin: 'auto',
  padding: theme.spacing(1),
  border: `1px dashed ${theme.palette.grey[500_32]}`,
}));

const DropZoneStyle = styled("div")({
  zIndex: 0,

  outline: "none",
  display: "flex",
  overflow: "hidden",
  // borderRadius: '50%',
  position: "relative",
  alignItems: "center",
  justifyContent: "start",
  // '& > *': { width: '100%', height: '100%' },
  "&:hover": {
    cursor: "pointer",
    "& .placeholder": {
      zIndex: 9,
    },
  },
});

const PlaceholderStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

// ----------------------------------------------------------------------

UploadSingleFile2.propTypes = {
  error: PropTypes.bool,
  file: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  helperText: PropTypes.node,
  sx: PropTypes.object,
};

export default function UploadSingleFile2({
  error,
  file,
  disabled,
  width,
  label,
  uploadState,
  handleDelete,
  placeholder,
  helperText,
  sx,
  ...other
}) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    multiple: false,
    ...other,
    accept: ["image/*", "application/pdf"],
  });
  const { uploading, uploaded, progress } = uploadState;
  return (
    <>
      <Box sx={{ flex: width }}>
        <Box
          sx={{
            cursor: !uploading && !uploaded && "pointer",
            display: "flex",
            borderWidth: "1px",
            borderStyle: uploaded ? "solid" : "dotted",
            borderColor: uploaded ? green[800] : blue[700],
            borderRadius: 1,
            ...((isDragReject || error) && {
              borderColor: "error.light",
            }),
            px: 2,
            py: "5px",
          }}
        >
          {!uploading && !uploaded && (
            <Box
              {...getRootProps()}
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "100%",
                ...(isDragActive && { opacity: 0.72 }),
              }}
            >
              <input {...getInputProps()} />

              <Iconify icon="eva:file-add-outline" sx={{ color: blue[700] }} />
              <Typography variant="caption" sx={{ color: blue[700], mx: 2 }}>
                {label}
              </Typography>
            </Box>
          )}

          {uploading && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mt: 1,
                width: "100%",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ width: "100%", color: blue[700], mx: 2 }}
              >
                Uploading File
              </Typography>
              <Box sx={{ mt: 1, width: "100%" }}>
                <LinearProgress variant="determinate" value={progress} />
              </Box>
            </Box>
          )}
          {uploaded && (
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: green[800],
                width: "100%",
              }}
            >
              <>
                <Iconify icon="eva:checkmark-outline" />
                <Typography variant="caption" sx={{ mx: 2 }}>
                  File Already Uploaded
                </Typography>
              </>
              {!disabled && (
                <Iconify
                  icon="eva:close-circle-outline"
                  sx={{ cursor: "pointer" }}
                  onClick={handleDelete}
                />
              )}
            </Box>
          )}
        </Box>

        {helperText ? (
          <Typography variant="caption" sx={{ width: "100%" }}>
            {helperText}
          </Typography>
        ) : (
          <Typography variant="caption" sx={{ width: "100%" }}>
            {placeholder}
          </Typography>
        )}

        {fileRejections.length > 0 && (
          <RejectionFiles fileRejections={fileRejections} />
        )}
      </Box>

      {/* {helperText && helperText} */}
    </>
  );
}

const storage = getStorage();

const UploadImage = (file) => {
  const storageRef = ref(storage, "some-child");

  const uploadTask = uploadBytesResumable(storageRef, file);

  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      async () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        // const imgURL = await uploadTask.snapshot.ref.getDownloadURL();
        // resolve(imgURL);
      }
    );
  });
};

// const UploadImage = async (croppedImage) => {
//     // setLoading(true)
//     const metadata = { contentType: 'image/jpeg' }
//     const storageRef = await firebase.storage().ref();
//     const uploadTask = storageRef
//         .child("campaignImage/" + uuidv4())
//         .put(croppedImage, metadata);

//     uploadTask.on(
//         firebase.storage.TaskEvent.STATE_CHANGED,
//         snapshot => {
//             var progress =
//                 (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

//             switch (snapshot.state) {
//                 case firebase.storage.TaskState.PAUSED:
//                     console.log("UPloading is paused");
//                     break;
//                 case firebase.storage.TaskState.RUNNING:
//                     console.log("UPloading is in progress...");
//                     break;
//             }
//             if (progress == 100) {
//                 console.log("uploaded", { type: "success" });
//             }
//         },
//         error => {
//             console.log("something is wrong in state change", { type: "error" });
//         },
//         () => {
//             uploadTask.snapshot.ref
//                 .getDownloadURL()
//                 .then(downloadURL => {

//                     localStorage.setItem("imageURL", JSON.stringify({
//                         imageURL: downloadURL
//                     }));
//                     // setImageURL(downloadURL)
//                     // setLoading(false)
//                 })
//                 .catch(err => console.log(err));
//         }
//     );
// }
