import { sentenceCase } from "change-case";
import PropTypes from "prop-types";
// @mui
import { Button, Chip, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
// utils
// components
import Iconify from "@/components/Iconify";

// ----------------------------------------------------------------------

const RootStyle = styled("div")({
  flexGrow: 1,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
});

const WrapperStyle = styled("div")(({ theme }) => ({
  display: "flex",
  overflow: "hidden",
  alignItems: "stretch",
  margin: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  border: `solid 1px ${theme.palette.divider}`,
}));

const LabelStyle = styled((props) => (
  <Typography component="span" variant="subtitle2" {...props} />
))(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  color: theme.palette.text.secondary,
  backgroundColor: theme.palette.background.neutral,
  borderRight: `solid 1px ${theme.palette.divider}`,
}));

// ----------------------------------------------------------------------

CampaignBoxTagFiltered.propTypes = {
  filters: PropTypes.object,
  isShowReset: PropTypes.bool,
  onRemoveCategory: PropTypes.func,
  onResetAll: PropTypes.func,
};

export default function CampaignBoxTagFiltered({
  category,
  isShowReset,
  onRemoveCategory,
  onResetAll,
}) {
  return (
    <RootStyle>
      {category !== "All" && (
        <WrapperStyle>
          <LabelStyle>Category:</LabelStyle>
          <Stack direction="row" flexWrap="wrap" sx={{ p: 0.75 }}>
            <Chip
              size="small"
              label={sentenceCase(category)}
              onDelete={onRemoveCategory}
              sx={{ m: 0.5 }}
            />
          </Stack>
        </WrapperStyle>
      )}

      {isShowReset && (
        <Button
          color="error"
          size="small"
          onClick={onResetAll}
          startIcon={<Iconify icon={"ic:round-clear-all"} />}
        >
          Clear All
        </Button>
      )}
    </RootStyle>
  );
}
