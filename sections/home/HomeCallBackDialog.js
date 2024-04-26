import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogTitle, IconButton } from '@mui/material';
import ContactForm from '../../components/ContactForm';

export default function HomeCallBackDialog({ open, onClose }) {
    return (
        <Dialog fullWidth maxWidth="xs" open={open} onClose={onClose}>
            <DialogTitle sx={{ direction: "rtl", p: 0, background: "#2e4f7e", color: "white", }}>
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                >
                    <CloseIcon sx={{ color: "white" }} />
                </IconButton>
            </DialogTitle>
            <DialogTitle sx={{ color: "white", background: "#2e4f7e", textAlign: "center", padding: "2px 24px 6px" }}>Please enter your details and we'll call you back</DialogTitle>
            <ContactForm />
        </Dialog>
    )
}
