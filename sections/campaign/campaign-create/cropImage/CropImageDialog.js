import { Box, Button, DialogActions } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useSnackbar } from "notistack";
import { useCallback, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import { RHFUploadMultiFile } from "@/components/hook-form";
import LoaderCenterInPage from "@/components/LoaderCenterInPage";
import { UploadImage } from "@/components/upload/UploadOnCloud";
// import { addImageToCart, removeImageFromCart } from '../../../../redux/slices/newCampaign';
// import { useDispatch } from '../../../../redux/store';
import uuidv4 from "@/utils/uuidv4";
import { getCroppedImg } from "./CanvasUtils";
import "./styles.css";
import { ImageEditer } from "@/components/upload/CropImage";

const CropImageDialog = ({ setValue, values }) => {
  const [singleFile, setsingleFile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [cropData, setCropData] = useState(null);
  const { enqueueSnackbar } = useSnackbar();
  // const dispatch = useDispatch();
  const cropperRef = useRef(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        singleFile,
        croppedAreaPixels,
        1
      );
      UploadImg(croppedImage, singleFile);
      handleClose();
    } catch (e) {
      console.error(e);
    }
  }, [singleFile, croppedAreaPixels]);

  const handleClose = () => {
    setsingleFile(null);
  };

  // const UploadImg = async (croppedImage) => {
  //   const id = uuidv4();
  //   const images = values.images || [];
  //   // dispatch(startLoading)
  //   setLoading(true);
  //   if (croppedImage) {
  //     const url = await UploadImage(croppedImage, `campaignImage/${id}`);
  //     const payload = {
  //       media_type: 'image',
  //       preview: url,
  //     };
  //     setValue('images', [...images, payload]);
  //     dispatch(addImageToCart(payload));
  //     setLoading(false);
  //     // dispatch(stopLoading)
  //   }
  // };

  const UploadImg = async () => {
    const id = uuidv4();
    const images = values.images || [];
    // dispatch(startLoading)
    setLoading(true);
    if (cropData) {
      const url = await UploadImage(cropData, `campaignImage/${id}`);
      const payload = {
        media_type: "image",
        preview: url,
      };
      setValue("images", [...images, payload]);
      // dispatch(addImageToCart(payload));
      setLoading(false);
      // dispatch(stopLoading)
    }
  };

  const handleDrop = useCallback(
    async (acceptedFiles) => {
      const imageDataUrl = await readFile(acceptedFiles[0]);
      setsingleFile(imageDataUrl);
    },
    [setValue, values.images]
  );

  const handleRemove = (file) => {
    const filteredItems = values.images?.filter((_file) => _file !== file);
    setValue("images", filteredItems);
    // dispatch(removeImageFromCart(filteredItems));
  };

  return (
    <>
      <div>
        {loading && <LoaderCenterInPage />}
        <RHFUploadMultiFile
          files={values.images}
          title="Upload Cover Picture of fundraising Campaign"
          showPreview
          placehold
          name="images"
          accept="image/*"
          onDrop={handleDrop}
          onRemove={handleRemove}
        />
      </div>
      <ImageEditer
        name="campaign_image"
        open={singleFile}
        handleClose={handleClose}
        cropperRef={cropperRef}
        image={singleFile}
        handleSave={UploadImg}
        setCropData={setCropData}
        aspect={1 / 1}
      />
      {/* <Dialog open={singleFile} onClose={handleClose}>
        <DialogContent
          sx={{
            height: 400,
            '@media (min-width: 540px)': {
              width: 400,
            },
            width: 300,
            padding: 0,
          }}
        >
          {singleFile && (
            <>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  minHeight: 400,

                  background: '#333',
                  '@media (min-width: 540px)': {
                    height: 400,
                  },
                }}
              >
                <Cropper
                  image={singleFile}
                  crop={crop}
                  rotation={rotation}
                  zoom={zoom}
                  aspect={3 / 3}
                  onCropChange={setCrop}
                  onRotationChange={setRotation}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                  objectFit="horizontal-cover"
                />
              </Box>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={showCroppedImage} fullWidth variant="contained" sx={{ textTransform: 'initial' }}>
            Crop and Save
          </Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
};

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

export default CropImageDialog;
