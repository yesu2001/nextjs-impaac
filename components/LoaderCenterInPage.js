import { CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';


const Loader = styled(CircularProgress)({
    position: "fixed",
    left: "50%",
    top: "50%",
    width: "100%",
    height: "100%",
    zIndex: 9999
})
const LoaderCenterInPage = () => (
    <Loader />
)

export default LoaderCenterInPage