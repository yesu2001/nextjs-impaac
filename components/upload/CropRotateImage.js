import React, { useState, useRef } from "react";
// import Cropper from 'react-cropper';
import Slider from "react-slick";
import Cropper from "react-easy-crop";
// import 'cropperjs/dist/cropper.css';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
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

const CropRotateImage = ({
  isUploaded,
  name,
  label,
  setValue,
  path,
  aspect,
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
              //   accept={accept}
            />
          </Box>
        )}
        <ImageEditer
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

export default CropRotateImage;

const ORIENTATION_TO_ANGLE = {
  3: 180,
  6: 90,
  8: -90,
};

const ImageEditer = ({
  open,
  handleClose,
  cropperRef,
  image,
  handleSave,
  setCropData,
  aspect,
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);

  const onCropComplete = async (_, croppedAreaPixels) => {
    const croppedImage = await getCroppedImg(image, croppedAreaPixels, aspect);
    setCropData(croppedImage);
  };

  const handleRotation = (e) => {
    setRotation(e.target.value);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent
        sx={{
          height: 400,
          "@media (min-width: 540px)": {
            width: 400,
          },
          width: 500,
          padding: 0,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            minHeight: 400,

            background: "#333",
            "@media (min-width: 540px)": {
              height: 400,
            },
          }}
        >
          <Cropper
            image={image}
            ref={cropperRef}
            style={{ height: "100%", width: "100%" }}
            crop={crop}
            zoom={zoom}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            objectFit="horizontal-cover"
            cropShape={aspect === 1 && "round"}
            rotation={rotation}
            onRotationChange={setRotation}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex" }}>
          <Typography>Rotate</Typography>
          <input
            type="range"
            min={0}
            max={360}
            value={rotation}
            onChange={handleRotation}
          />
          <Slider
            value={rotation}
            min={0}
            max={360}
            step={1}
            aria-labelledby="rotate"
            onChange={(e, rotation) => setRotation(rotation)}
            className="range"
          />
        </Box>
        <Button
          onClick={() => {
            handleSave();
            handleClose();
          }}
          fullWidth
          variant="contained"
        >
          Crop and Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
