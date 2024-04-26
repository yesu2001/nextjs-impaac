"use client";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import Iconify from "./Iconify";
import { TipsContent } from "./TipsContent";
import Markdown from "./Markdown";

export default function Tips() {
  return (
    <>
      <Box
        sx={{
          pt: { md: "2rem", xs: "1,2rem" },
          pb: "2rem",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        {TipsContent.map((content) => (
          <Accordion key="1">
            <AccordionSummary
              expandIcon={
                <Iconify
                  icon={"eva:arrow-ios-downward-fill"}
                  width={30}
                  height={20}
                />
              }
            >
              <Typography variant="subtitle1">{content.heading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* <Typography> */}
              <Markdown>{content.detail}</Markdown>
              {/* </Typography> */}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
}
