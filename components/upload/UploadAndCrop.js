import { Box, Button, Modal, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { blue, green } from "@mui/material/colors";
import { useRef, useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { dataURLtoFile } from "@/sections/campaign/campaign-create/cropImage/CanvasUtils";
import Iconify from "../Iconify";
import { UploadImage } from "./UploadOnCloud";
// import pic1 from '../../assets/impaac-impact.png';

// ----------------------------------------------------------------
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "95%", md: "60%", lg: "50%" },
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 1,
};

// ----------------------------------------------------------------

function UploadAndCrop({
  isUploaded,
  setValue,
  name,
  label,
  path,
  width,
  helperText,
  accept,
  aspect,
}) {
  const inputRef = useRef(null);
  const [uploadState, setUploadState] = useState({
    uploading: false,
    uploaded: isUploaded || false,
    progress: undefined,
  });

  const handleDelete = () => {
    setUploadState({
      ...uploadState,
      uploaded: false,
    });
  };

  const [imageUrl, setImageUrl] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isDoc, setIsDoc] = useState(false);

  const handleInput = () => {
    inputRef.current.click();
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
      const fileType = files[0].type;
      console.log(fileType);
      if (fileType.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          setImageUrl(reader.result);
          setShowModal(true);
        };

        reader.readAsDataURL(files[0]);
      } else {
        setShowModal(false);
        if (files) {
          UploadImage(files[0], path, (progress) => {
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveHandler = async () => {
    if (croppedImage) {
      UploadImage(croppedImage, path, (progress) => {
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
    <Box sx={{ flex: width }}>
      <Box
        sx={{
          cursor: !uploading && !uploaded && "pointer",
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
              accept={accept}
            />
          </Box>
        )}
        <ImageCropEditor
          showModal={showModal}
          imgURL={imageUrl}
          setCroppedImage={setCroppedImage}
          onSaveHandler={saveHandler}
          onModalClose={() => {
            setShowModal(false);
          }}
          name={name}
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
      {helperText && (
        <Typography variant="caption" sx={{ pl: 1 }}>
          {helperText}
        </Typography>
      )}
    </Box>
  );
}

export default UploadAndCrop;

export const ImageCropEditor = ({
  setCroppedImage,
  showModal,
  imgURL,
  onModalClose,
  onSaveHandler,
  name,
}) => {
  // const aspectRatio = name === 'image' ? 1 / 1 : 18 / 6;
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({
    unit: "%",
    width: 50,
    height: 50,
    x: 25,
    y: 25,
  });
  const [croppedImageUrl, setCroppedImageUrl] = useState("");
  const imgRef = useRef(null);

  const makeClientCrop = async (crop) => {
    if ((image, crop.width && crop.height)) {
      const croppedImg = await getCroppedImg(image, crop, "newFile.jpeg");
      setCroppedImageUrl(croppedImg);
      setCroppedImage(croppedImg);
    }
  };

  const getCroppedImg = (image, crop, fileName) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    const pixelRatio = window.devicePixelRatio;
    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;
    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    try {
      return new Promise((resolve) => {
        const canvasDataUrl = canvas.toDataURL("image/jpeg");
        const convertedUrlToFile = dataURLtoFile(
          canvasDataUrl,
          "cropped-image.jpeg"
        );
        resolve(convertedUrlToFile);
        canvas.toBlob((file) => {
          resolve(URL.createObjectURL(file));
        }, "image/jpeg");
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return (
    <Modal open={showModal} onClose={onModalClose}>
      <Box sx={style}>
        <div
          style={{
            flex: 0.6,
            height: "90%",
            width: "100%",
            objectFit: "cover",
          }}
        >
          <ReactCrop
            src={imgURL}
            ref={imgRef}
            crop={crop}
            onImageLoaded={(img) => setImage(img)}
            onComplete={(crop) => makeClientCrop(crop)}
            onChange={(cropData) => setCrop(cropData)}
          />
        </div>
        <footer
          style={{
            flex: 0.2,
            display: "flex",
            alignContent: "center",
            justifyContent: "space-between",
            px: 3,
            py: 2,
            mt: 2,
          }}
        >
          <Button onClick={onModalClose}>Cancel</Button>
          <Button
            onClick={() => {
              onSaveHandler();
              onModalClose();
            }}
            sx={{
              background: "#3CBA6F",
              color: "white",
              "&:hover": { color: "white", backgroundColor: "#3CBA6F" },
            }}
          >
            Save
          </Button>
        </footer>
      </Box>
    </Modal>
  );
};
