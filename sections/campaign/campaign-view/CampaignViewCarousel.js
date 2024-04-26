import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import Slider from "react-slick";
// @mui
import { Box, Button, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { alpha, styled } from "@mui/material/styles";
import youtube_logo from "@/assets/youtube_logo.png";
//
import { CarouselArrowIndex } from "@/components/carousel";
import Image from "@/components/Image";
// import { useSelector } from '../../../redux/store';
import "./index.css";
import Iconify from "@/components/Iconify";
// import PopUp from '../../../components/PopUp';
import { getYouTubeThumbnail } from "@/utils/youtubethumbnail";

// ----------------------------------------------------------------------

const THUMB_SIZE = 64;

const RootStyle = styled("div")(({ theme }) => ({
  "& .slick-slide": {
    float: theme.direction === "rtl" ? "right" : "left",
    "&:focus": { outline: "none" },
  },
}));

const modalStyles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  padding: "20px",
  paddingTop: "25px",
  border: "none",
  outline: "none",
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  alignItems: "center",
  textAlign: { xs: "center", md: "left" },
  gap: 2,
  width: {
    xs: "90%",
    sm: "60%",
    md: "auto",
  },
};

export default function CampaignViewCarousel({ campaign }) {
  const { gallery, title } = campaign;

  const [campaignImages, setCampaignImages] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [nav1, setNav1] = useState();

  const [nav2, setNav2] = useState();

  const [openVideo, setOpenVideo] = useState(false);
  const [video, setVideo] = useState("");

  const slider1 = useRef(null);

  const slider2 = useRef(null);

  const settings1 = {
    dots: false,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    slidesToScroll: 1,
    adaptiveHeight: true,
    beforeChange: (current, next) => setCurrentIndex(next),
  };

  const settings2 = {
    dots: true,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    centerPadding: "0px",
    slidesToShow: gallery?.length > 3 ? 3 : gallery?.length,
  };

  const handleOpenVideo = (videoLink) => {
    setOpenVideo(true);
    setVideo(videoLink);
  };
  const handleCloseVideo = () => setOpenVideo(false);

  useEffect(() => {
    const images = campaign?.gallery?.map((item) => {
      if (item.media_type === "youtube") {
        const ytImage = getYouTubeThumbnail(item.preview);
        return {
          media_type: "youtube",
          preview: ytImage,
          videoUrl: item.preview,
        };
      }
      return item;
    });
    setCampaignImages(images);
  }, [campaign]);

  useEffect(() => {
    if (slider1.current) {
      setNav1(slider1.current);
    }
    if (slider2.current) {
      setNav2(slider2.current);
    }
  }, []);

  const handlePrevious = () => {
    slider1.current?.slickPrev();
  };

  const handleNext = () => {
    slider1.current?.slickNext();
  };

  return (
    <RootStyle>
      <Box>
        <Box
          sx={{
            zIndex: 0,
            borderRadius: 2,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Slider {...settings1} ref={slider1}>
            {campaignImages?.map((img, index) => (
              <div key={index}>
                {img.media_type === "youtube" && (
                  <div style={{ position: "relative" }}>
                    <Image
                      key={index}
                      alt={title}
                      src={img.preview}
                      ratio="1/1"
                    />
                    <Button
                      sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                      }}
                      onClick={() => handleOpenVideo(img.videoUrl)}
                    >
                      <Iconify
                        icon="solar:play-bold"
                        sx={{
                          width: 130,
                          height: 130,
                          background: "white",
                          p: 3,
                          borderRadius: "50%",
                        }}
                      />
                    </Button>
                  </div>
                )}
                {img.media_type === "image" && (
                  <Image
                    key={index}
                    alt={title}
                    src={img.preview}
                    ratio="1/1"
                  />
                )}
              </div>
            ))}
          </Slider>
          <CarouselArrowIndex
            index={currentIndex}
            total={gallery?.length}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </Box>
      </Box>

      <VideoPlayerModal
        open={openVideo}
        onClose={handleCloseVideo}
        video={video}
      />
    </RootStyle>
  );
}

const VideoPlayerModal = ({ open, onClose, video }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiModal-backdrop": {
          backgroundColor: "rgba(0, 0, 0, 0.85);",
        },
        ".css-1m9bonx-MuiBackdrop-root-MuiDialog-backdrop": {
          background: "rgba(0,0,0,0.85)",
        },
        "& > .MuiBackdrop-root": {
          background: "rgba(0,0,0,0.85)",
        },
      }}
    >
      <div>
        <CloseIcon
          sx={{
            p: 1,
            border: "2px solid white",
            borderRadius: "50%",
            fontSize: 50,
            color: "white",
            cursor: "pointer",
            position: "absolute",
            top: 10,
            right: 10,
          }}
          onClick={onClose}
        />
        <Box sx={modalStyles}>
          <Box
            sx={{
              width: { xs: "90vw", sm: 500, md: 800 },
              height: { xs: "50vh", sm: "70vh" },
            }}
          >
            <div className="video-responsive" style={{ height: "100%" }}>
              <ReactPlayer
                url={video}
                playing
                className="react-player"
                width="100%"
                height="100%"
              />
            </div>
          </Box>
        </Box>
      </div>
    </Modal>
  );
};
