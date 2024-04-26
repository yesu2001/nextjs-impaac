// @mui
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Link,
  Stack,
  Typography,
} from "@mui/material";

// components
import CustomCard from "../../../components/card/CustomCard";
import Iconify from "../../../components/Iconify";
import { FAQS } from "../../../_mock/faqs";

// ----------------------------------------------------------------------

export default function CampaignViewFaqsList() {
  return (
    <>
      <CustomCard title="FAQs" customColor={"#f1f1f1"}>
        {FAQS.map((accordion, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={
                <Iconify
                  icon={"eva:arrow-ios-downward-fill"}
                  width={20}
                  height={20}
                />
              }
            >
              <Typography variant="subtitle1">{accordion.heading}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{accordion.detail}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        <Stack direction="row" justifyContent="center" sx={{ m: 1 }}>
          <Link href={"/faq"} target="_blank">
            <Typography>See more</Typography>
          </Link>
        </Stack>
      </CustomCard>
    </>
  );
}
