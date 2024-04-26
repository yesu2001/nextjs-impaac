import dynamic from "next/dynamic";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import { useMemo } from "react";
import ImageUploader from "quill-image-uploader";
import { Quill } from "react-quill";
import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
//
import EditorToolbar, {
  formats,
  redoChange,
  undoChange,
} from "./EditorToolbar";
import { UploadImage } from "../upload/UploadOnCloud";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

Quill.register("modules/imageUploader", ImageUploader);
// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  border: `solid 1px ${theme.palette.grey[500_32]}`,
  "& .ql-container.ql-snow": {
    borderColor: "transparent",
    ...theme.typography.body1,
    fontFamily: theme.typography.fontFamily,
  },
  "& .ql-editor": {
    minHeight: 200,
    maxHeight: 640,
    "&.ql-blank::before": {
      fontStyle: "normal",
      color: theme.palette.text.disabled,
    },
    "& pre.ql-syntax": {
      ...theme.typography.body2,
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.grey[900],
    },
  },
}));

// ----------------------------------------------------------------------

Editor.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.node,
  simple: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Editor({
  id = "story",
  error,
  placeholder,
  value,
  onChange,
  simple = false,
  helperText,
  sx,
  ...other
}) {
  const modules = useMemo(
    () => ({
      toolbar: {
        container: `#${id}`,
        handlers: {
          undo: undoChange,
          redo: redoChange,
        },
      },
      history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
      },
      // syntax: {
      //   highlight: (text) => hljs.highlightAuto(text).value,
      // },
      clipboard: {
        matchVisual: false,
      },
      imageUploader: {
        upload: async (file) => {
          if (file) {
            const url = await UploadImage(file, `Description/${file.name}`);
            return url;
          }
        },
      },
    }),
    []
  );

  return (
    <div>
      <RootStyle
        sx={{
          ...(error && {
            border: (theme) => `solid 1px ${theme.palette.error.main}`,
          }),
          ...sx,
        }}
      >
        <EditorToolbar id={id} isSimple={simple} />
        <ReactQuill
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          placeholder={placeholder}
          {...other}
        />
      </RootStyle>

      {helperText && helperText}
    </div>
  );
}
