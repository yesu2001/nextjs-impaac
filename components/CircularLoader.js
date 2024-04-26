import { CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const Loader = styled(CircularProgress)({
  position: "fixed",
  left: "50%",
  top: "50%",
  width: "100%",
  height: "100%",
  zIndex: 9999,
});
const CircularLoader = () => {
  // const { isLoading } = useSelector((state) => state.dashboard);

  // useEffect(() => {
  //   dispatch(stopLoading());
  // }, []);

  return (
    <div>
      <Loader />
    </div>
  );
};

export default CircularLoader;
