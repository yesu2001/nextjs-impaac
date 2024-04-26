import React, { useState, useRef } from "react";
import Slider from "react-slick";
// import Cropper from 'react-easy-crop';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  LinearProgress,
  Modal,
  Typography,
} from "@mui/material";
import { blue, green } from "@mui/material/colors";
import Iconify from "../Iconify";
import { UploadImage } from "./UploadOnCloud";
import {
  dataURLtoFile,
  getCroppedImg,
} from "@/sections/campaign/campaign-create/cropImage/CanvasUtils";

// -----------------------------------------------------------------------
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: "90%", md: "70%", lg: "50%" },
  height: { sm: "90%", md: "70%", lg: "70%" },
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

// -----------------------------------------------------------------------

const CropImage = ({
  isUploaded,
  name,
  label,
  setValue,
  path,
  aspect,
  accept,
  sx,
  setWaiting,
}) => {
  const [uploadState, setUploadState] = useState({
    uploading: false,
    uploaded: isUploaded || false,
    progress: undefined,
  });
  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState(null);
  const [open, setOpen] = useState(false);
  const cropperRef = useRef(null);
  const inputRef = useRef(null);

  const handleInput = () => {
    inputRef.current.click();
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleDelete = () => {
    setUploadState({
      ...uploadState,
      uploaded: false,
    });
  };

  const onChange = (e) => {
    try {
      e.preventDefault();
      let files;

      if (e.dataTransfer) {
        files = e.dataTransfer.files;
      } else if (e.target) {
        files = e.target.files;
      }

      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setOpen(true);
      };

      reader.readAsDataURL(files[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSave = async () => {
    if (cropData) {
      UploadImage(cropData, path, (progress) => {
        setWaiting(true);
        setUploadState((prevState) => ({
          ...prevState,
          uploading: true,
          progress,
        }));
      })
        .then((downloadURL) => {
          setUploadState({
            uploading: false,
            uploaded: true,
            progress: undefined,
          });
          setWaiting(false);
          setValue(name, downloadURL);
        })
        .catch((error) => {
          console.error("Upload failed:", error);
        });
    }
  };

  const { uploading, uploaded, progress } = uploadState;

  return (
    <Box>
      <Box
        sx={{
          //   cursor: !uploading && !uploaded && 'pointer',
          display: "flex",
          borderWidth: "1px",
          borderStyle: uploaded ? "solid" : "dotted",
          borderColor: uploaded ? green[800] : blue[700],
          borderRadius: 1,
          px: 2,
          py: "5px",
          ...sx,
        }}
      >
        {!uploading && !uploaded && (
          <Box
            style={{ display: "flex", alignItems: "center" }}
            onClick={handleInput}
          >
            <Iconify icon="eva:file-add-outline" sx={{ color: blue[700] }} />
            <Typography variant="caption" sx={{ color: blue[700], mx: 2 }}>
              {label}
            </Typography>
            <input
              type="file"
              ref={inputRef}
              style={{ display: "none" }}
              onChange={onChange}
              name={name}
              accept={accept}
            />
          </Box>
        )}
        <ImageEditer
          name={name}
          open={open}
          handleClose={handleClose}
          cropperRef={cropperRef}
          image={image}
          handleSave={handleSave}
          setCropData={setCropData}
          aspect={aspect}
        />
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
              <Typography variant="subtitle2" sx={{ mx: 2 }}>
                File Already Uploaded
              </Typography>
            </>
            <Iconify
              icon="eva:close-circle-outline"
              sx={{ cursor: "pointer" }}
              onClick={handleDelete}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CropImage;

const ORIENTATION_TO_ANGLE = {
  3: 180,
  6: 90,
  8: -90,
};

export const ImageEditer = ({
  name,
  open,
  handleClose,
  cropperRef,
  image,
  handleSave,
  aspect,
  setCropData,
}) => {
  const handleCrop = () => {
    const canvas = cropperRef.current?.cropper.getCroppedCanvas();

    let targetWidth = 0;
    let targetHeight = 0;
    if (name === "cover_image") {
      targetWidth = 820;
      targetHeight = 310;
    } else if (name === "image") {
      targetWidth = 200;
      targetHeight = 200;
    } else {
      targetWidth = 600;
      targetHeight = 600;
    }

    const resizedCanvas = document.createElement("canvas");
    resizedCanvas.width = targetWidth;
    resizedCanvas.height = targetHeight;
    const resizedContext = resizedCanvas.getContext("2d");
    resizedContext.drawImage(canvas, 0, 0, targetWidth, targetHeight);

    const dataUrl = resizedCanvas.toDataURL("image/jpeg", 0.9);
    const blob = dataURLtoBlob(dataUrl);
    const file = new File([blob], "cropped-image.jpg", { type: "image/jpeg" });
    setCropData(file);
  };

  const dataURLtoBlob = (dataURL) => {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new Blob([u8arr], { type: mime });
  };

  const handleSubmit = () => {
    handleSave();
    handleClose();
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        {image && (
          <Cropper
            ref={cropperRef}
            src={image}
            aspectRatio={aspect}
            viewMode={1}
            guides
            autoCropArea={1}
            crop={handleCrop}
            cropBoxResizable={false}
            minCropBoxWidth={600}
            minCropBoxHeight={600}
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ color: "gray" }}>
          Cancel
        </Button>
        <Button variant="contained" onClick={handleSubmit}>
          Crop and Upload
        </Button>
      </DialogActions>
    </Dialog>
  );
};
