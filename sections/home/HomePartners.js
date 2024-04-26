import Image from "next/image";
// @mui
import { Box } from "@mui/material";
// utils

//  Assets
import Buddy from "../../assets/impaac-buddyhelp.png";
import Circularise from "../../assets/impaac-circularise.png";
import Eminence from "../../assets/impaac-eminence-logo.png";
import GreenCars from "../../assets/impaac-greentomatocars.png";
import Impact from "../../assets/impaac-impact.png";
import Innocent from "../../assets/impaac-innocent.png";
import Panorama from "../../assets/impaac-panorama.png";
import Predium from "../../assets/impaac-predium.png";
import Tentree from "../../assets/impaac-tentree-logo.png";
import Transcontinental from "../../assets/impaac-transcontinental-logo.png";
import Trodel from "../../assets/impaac-trodelspende.png";
import UrbanTailz from "../../assets/impaac-urban-tailz-logo.png";
import useResponsive from "@/hooks/useResponsive";

export default function HomePartners({ sx, ...other }) {
  const isMobile = useResponsive("down", "sm");
  const partners_grid_1 = [
    { img_src: Eminence },
    { img_src: Tentree },
    { img_src: Transcontinental },
  ];
  const partners_grid_2 = [
    { img_src: Panorama },
    { img_src: Trodel },
    { img_src: UrbanTailz },
  ];
  const partners_grid_3 = [
    { img_src: Innocent },
    { img_src: Impact },
    { img_src: Circularise },
  ];
  const partners_grid_4 = [
    { img_src: GreenCars },
    { img_src: Predium },
    { img_src: Buddy },
  ];

  return (
    <div>
      <Box>
        <Box
          sx={{
            ...sx,
            display: "flex",
            flexWrap: { md: "noWrap", xs: "wrap" },
            justifyContent: "center",
            pt: 3,
            marginTop: "32px",
          }}
          {...other}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {partners_grid_1.map((partner, index) => (
              <Image
                key={index}
                src={partner.img_src}
                alt={partner.img_src}
                height={isMobile ? 30 : 35}
              />
            ))}
          </Box>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: { xs: "5px" },
            }}
          >
            {partners_grid_2.map((partner, index) => (
              <Image
                key={index}
                src={partner.img_src}
                alt={partner.img_src}
                height={isMobile ? 22 : 33}
              />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            ...sx,
            display: "flex",
            justifyContent: "center",
            flexWrap: { md: "noWrap", xs: "wrap" },
            pb: 3,
            marginTop: "32px",
            marginBottom: 4,
          }}
          {...other}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {partners_grid_3.map((partner, index) => (
              <Image
                key={index}
                src={partner.img_src}
                alt={partner.img_src}
                height={isMobile ? 23 : 33}
              />
            ))}
          </Box>
          <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pt: { xs: "5px" },
            }}
          >
            {partners_grid_4.map((partner, index) => (
              <Image
                key={index}
                src={partner.img_src}
                alt={partner.img_src}
                height={isMobile ? 22 : 30}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </div>
  );
}
