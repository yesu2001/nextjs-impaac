import { useParams } from "next/navigation";
import {
  Avatar,
  Box,
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Grid,
  InputAdornment,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Select,
  MenuItem,
  Link,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CloseIcon from "@mui/icons-material/Close";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Paper from "@mui/material/Paper";
import { LoadingButton } from "@mui/lab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSnackbar } from "notistack";
import { useCallback, useEffect, useMemo, useState } from "react";
import Iconify from "@/components/Iconify";
import Scrollbar from "../../../../components/Scrollbar";
import UploadMultipleFiles from "../../../../components/upload/UploadMultipleFiles";
import { campaignStatsHelper } from "@/helper/campaign";
import {
  createWithdrawalHelper,
  updateWithdrawalHelper,
} from "@/helper/withdrawal";
import useAuth from "@/hooks/useAuth";
// import { getmyCampaigns } from '../../../../redux/slices/dashboard';
// import { useDispatch } from '../../../../redux/store';
// import { PATH_DASHBOARD } from '../../../../routes/paths';
import { withdrawalFaq } from "@/_mock/faqs";
import {
  FormProvider,
  RHFTextField,
  RHFUploadMultiFile,
} from "@/components/hook-form";
import { UploadMultiFile } from "../../../../components/upload";
import DialogPopup from "@/components/DialogPopup";
import Label from "@/components/Label";
// import WithdrawalUpdate from './WithdrawalUpdate';

const withdrawalTypeDefault = [
  {
    value: "domestic",
    name: "Domestic",
  },
  {
    value: "international",
    name: "International",
  },
];

export default function WithdrawalCreate({ userData, campaign }) {
  const { kyc_info, bank_info, kyc_status } = userData;

  const { title, eligible_amount, total_collect_amount, settel_amount } =
    campaign;

  const { id } = useParams();

  const { user } = useAuth();

  // const dispatch = useDispatch();

  const { enqueueSnackbar } = useSnackbar();

  const [openConfirm, setOpenConfirm] = useState(false);

  const [stats, setStats] = useState({});
  const { last_withdrawal } = stats;

  const [amount, setAmount] = useState("");

  const [message, setMessage] = useState("");

  const [files, setFiles] = useState([]);
  const [openKnowMore, setOpenKnowMore] = useState(false);
  // const [currency, setCurrency] = useState('INR');
  // const [symbol, setSymbol] = useState('₹');
  const [withdrawalType, setWithdrawalType] = useState("domestic");

  const changeType = (value) => {
    setWithdrawalType(value);
  };

  const handleCloseKnowMore = () => setOpenKnowMore(false);

  const preload = () => {
    campaignStatsHelper(id, user.id, user.token).then((data) => {
      if (data.error) {
        console.log(data.error);
      }
      setStats(data);
    });
  };

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  const CallBackSchema = Yup.object().shape({
    amount: Yup.number()
      .integer("Withdrawal Amount must be an integer")
      .moreThan(99, "Withdrawal Amount must be more than 100")
      .lessThan(50001, "Withdrawal Amount must be less than 50,000")
      .required("Withdrawal amount is required"),
    receipts: Yup.array().when("amount", {
      is: (amount) => amount > 1000,
      then: Yup.array().min(1, "Receipts is required"),
      otherwise: Yup.array(), // No validation if amount is 1000 or less
    }),
  });

  const defaultValues = useMemo(
    () => ({
      amount: last_withdrawal?.amount || "",
      receipts: [],
      // images: [],
    }),
    [last_withdrawal]
  );

  const methods = useForm({
    resolver: yupResolver(CallBackSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    preload();
  }, [user]);

  useEffect(() => {
    reset(defaultValues);
  }, [last_withdrawal, userData]);

  const onSubmit = async (data) => {
    const { amount, receipts } = data;
    try {
      const is_int = withdrawalType === "international";
      if (last_withdrawal?.status === undefined) {
        createWithdrawalHelper(user.id, user.token, id, {
          amount,
          receipts,
          is_int,
        }).then((data) => {
          if (data.error) {
            console.log(data.error);
            enqueueSnackbar(data.error, {
              variant: "error",
            });
          } else {
            // dispatch(getmyCampaigns(user.id, user.token));
            preload();
            handleOpenConfirm();
          }
        });
      }

      if (last_withdrawal.status === "rejected") {
        updateWithdrawalHelper(user.id, user.token, last_withdrawal._id, {
          receipts,
        }).then((data) => {
          if (data.error) {
            enqueueSnackbar(data.error, {
              variant: "error",
            });
          } else {
            // dispatch(getmyCampaigns(user.id, user.token));
            preload();
            handleOpenConfirm();
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleOnChange = (event) => {
    setAmount(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const createData = (name, sunName, inr, usd) => ({ name, sunName, inr, usd });

  const rows = [
    createData(
      "Total Raised Amount",
      "",
      stats?.collect_amount || 0,
      stats?.int_collect_amount || 0
    ),
    createData(
      "Payment Gateway Charges",
      "(National 3% & International 7% to 20%)",
      stats?.pg_amount,
      stats?.int_pg_amount || 0
    ),
    // createData('Under proccess Amount', '(National 3% & International 7% to 20%)', stats?.pg_amount, stats?.int_pg_amount || 0),
    createData(
      "Past Withdrawal",
      "",
      stats?.settled_amount,
      stats?.int_settled_amount || 0
    ),
    createData(
      "Current Withdrawal Requested",
      "",
      stats?.requested_withdrawal,
      stats?.int_requested_withdrawal || 0
    ),
    createData(
      "Process Amount",
      "(Domestic 1 days & International 15 days)",
      stats?.process_amount || 0,
      stats?.int_process_amount || 0
    ),
    createData(
      "Available for withdrawal",
      "",
      stats?.eligible_amount,
      stats?.int_eligible_amount || 0
    ),
  ];

  const kycInfo = userData?.bank_info ? userData?.bank_info : userData.kycInfo;

  const handleRemoveAll = () => {
    setValue("receipts", []);
  };

  const handleRemove = (file) => {
    const filteredItems = values.receipts?.filter((_file) => _file !== file);
    setValue("receipts", filteredItems);
  };

  return (
    <div>
      <Card sx={{ pb: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
          <Stack>
            <Typography variant="h4">{title}</Typography>
          </Stack>
        </Box>
        <Grid container justifyContent={"center"}>
          <Grid item xs={12} md={7}>
            <Card sx={{ maxWidth: 800, p: 2, m: 2 }}>
              <TableContainer component={Paper} sx={{ p: 0, m: 0 }}>
                <Table aria-label="Withdrawal Table" sx={{ p: 0, m: 0 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography variant="h5" sx={{ color: "text.primary" }}>
                          Amount
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5" sx={{ color: "text.primary" }}>
                          Domestic
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="h5" sx={{ color: "text.primary" }}>
                          International
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          <div>
                            <Typography variant="subtitle1">
                              {row.name}
                            </Typography>
                            <Typography variant="body2">
                              {" "}
                              {row.sunName}
                            </Typography>
                          </div>
                        </TableCell>

                        <TableCell align="center">{row.inr}</TableCell>
                        <TableCell align="center">{row.usd}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>

          <Grid item xs={12} md={5} sx={{ p: 1 }}>
            <Card sx={{ p: 2 }}>
              {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                <TextField
                  sx={{ py: 0 }}
                  select
                  variant="outlined"
                  size="small"
                  value={withdrawalType}
                  onChange={(event) => {
                    changeType(event.target.value);
                  }}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {withdrawalTypeDefault.slice(0, 2).map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.name}
                    </option>
                  ))}
                </TextField>
              </Box> */}

              {/* <Box
                sx={{
                  flex: 0.1,
                  display: 'flex',
                  justifyContent: 'center',
                  itemAligment: 'center',
                  margin: '0 20px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  my: 2,
                }}
              >
                {withdrawalTypeDefault.slice(0, 2).map((option) => (
                  <Box
                    sx={{
                      flex: 0.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: withdrawalType === option.value ? '#385F96' : '#F4F6F8',
                      color: withdrawalType === option.value ? 'white' : 'black',
                      py: 1,
                      cursor: 'pointer',
                    }}
                    onClick={() => changeType(option.value)}
                  >
                    {option.name}
                  </Box>
                ))}
              </Box> */}
              <RadioGroup
                row
                value={withdrawalType}
                onChange={(e) => changeType(e.target.value)}
                sx={{
                  width: "100%",
                  my: 2,
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                {withdrawalTypeDefault.slice(0, 2).map((option) => (
                  <FormControlLabel
                    value={option.value}
                    control={<Radio />}
                    label={option.name}
                  />
                ))}
              </RadioGroup>

              <Box sx={{ pb: 4 }}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="subtitle1">
                    Total Eligible Amount:
                  </Typography>
                  {withdrawalType === "domestic" && (
                    <Typography>
                      &nbsp; INR {stats.eligible_amount || 0}
                    </Typography>
                  )}
                  {withdrawalType === "international" && (
                    <Typography>
                      &nbsp; INR {stats.int_eligible_amount || 0}
                    </Typography>
                  )}
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="subtitle1"> Account no. : </Typography>
                  &nbsp;
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {kycInfo?.account_number || kycInfo?.account_no}
                  </Typography>
                </Stack>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="subtitle1"> IFSC code: </Typography>
                  &nbsp;
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {kycInfo?.ifsc_code}
                  </Typography>
                </Stack>
                {last_withdrawal?.status !== undefined && (
                  <>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="subtitle1">
                        Current Withdrawal Amount:{" "}
                      </Typography>
                      &nbsp;
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {last_withdrawal?.amount}
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="subtitle1">
                        Current Withdrawal Status:{" "}
                      </Typography>
                      &nbsp;
                      <Label
                        id="coordinator"
                        sx={{ textTransform: "capitalize" }}
                        color={
                          (last_withdrawal?.status === "processing" &&
                            "warning") ||
                          (last_withdrawal?.status === "rejected" && "error") ||
                          (last_withdrawal?.status === "approved" && "info")
                        }
                      >
                        {last_withdrawal?.status}
                      </Label>
                      {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {last_withdrawal?.status}
                      </Typography> */}
                    </Stack>

                    <Stack>
                      {last_withdrawal?.status === "processing" ||
                        (last_withdrawal?.status === "approved" && (
                          <Typography
                            variant="caption"
                            color=""
                            sx={{
                              textAlign: "center",
                              color: orange[600],
                              fontSize: 12,
                              lineHeight: 1.5,
                              mt: 2,
                            }}
                          >
                            Your Current withdrawal request is pending. So you
                            cannot withdraw any amount now.
                          </Typography>
                        ))}
                      {last_withdrawal?.status === "rejected" && (
                        <Typography
                          variant="caption"
                          color=""
                          sx={{
                            textAlign: "center",
                            color: orange[600],
                            fontSize: 12,
                            lineHeight: 1.5,
                            mt: 2,
                          }}
                        >
                          Your withdrawal document is rejected! Re-submit it.
                        </Typography>
                      )}
                    </Stack>
                  </>
                )}
              </Box>

              {(stats.last_withdrawal?.status === "processing" ||
                stats.last_withdrawal?.status === "rejected") && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {last_withdrawal?.status === "rejected" && (
                    <Typography
                      variant="caption"
                      color=""
                      sx={{
                        textAlign: "center",
                        color: orange[600],
                        fontSize: 12,
                        lineHeight: 1.5,
                        mt: 2,
                      }}
                    >
                      {last_withdrawal?.comment}
                    </Typography>
                  )}
                  {/* <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                    <WithdrawalUpdate />
                  </FormProvider> */}
                </Box>
              )}

              {/* {(last_withdrawal?.status === undefined || last_withdrawal?.status === 'rejected') && */}
              <>
                <FormProvider
                  methods={methods}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {last_withdrawal?.status !== "rejected" && (
                    <>
                      <RHFTextField
                        label="Enter Withdrawal Amount"
                        name="amount"
                        disabled={
                          last_withdrawal?.status === "processing" ||
                          last_withdrawal?.status === "rejected" ||
                          last_withdrawal?.status === "approved"
                        }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">₹</InputAdornment>
                          ),
                        }}
                      />

                      <Typography
                        variant="caption"
                        sx={{
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          mr: "auto",
                          gap: 1,
                          color: "#385f96",
                          my: 1,
                        }}
                        onClick={() => setOpenKnowMore(true)}
                      >
                        Know more
                        <InfoOutlinedIcon
                          sx={{ fontSize: 20, color: "#385f96" }}
                        />
                      </Typography>
                    </>
                  )}
                  <RHFUploadMultiFile
                    showPreview
                    setValue={setValue}
                    name="receipts"
                    accept="image/*"
                    disabled={
                      last_withdrawal?.status === "processing" ||
                      last_withdrawal?.status === "approved"
                    }
                    path="receipts"
                    maxSize={3145728}
                    value={values?.receipts}
                    onRemove={handleRemove}
                    onRemoveAll={handleRemoveAll}
                  />

                  <Stack
                    direction="row"
                    sx={{ mt: 2, justifyContent: "center" }}
                  >
                    <LoadingButton
                      disabled={
                        last_withdrawal?.status === "processing" ||
                        last_withdrawal?.status === "approved"
                      }
                      variant="contained"
                      type="submit"
                      size="large"
                      loading={isSubmitting}
                      fullWidth
                    >
                      Withdraw Now
                    </LoadingButton>
                  </Stack>
                </FormProvider>
              </>

              {/* } */}

              <KnowMore open={openKnowMore} handleClose={handleCloseKnowMore} />
            </Card>
          </Grid>
        </Grid>
      </Card>
      <ConfirmTransferDialog open={openConfirm} onClose={handleCloseConfirm} />
      <Typography variant="h6" sx={{ textAlign: "center", my: 3, mx: "auto" }}>
        FAQs: Your One-Stop Solution for Effortless Withdrawals
      </Typography>
      {withdrawalFaq?.map((accordion, index) => (
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
            <Typography variant="subtitle2">{accordion.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">{accordion.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

function ConfirmTransferDialog({ open, onClose }) {
  return (
    <DialogPopup open={open} handleClose={onClose}>
      <DialogTitle>Withdrawal Request Received</DialogTitle>
      <DialogContent sx={{ mt: 2, pb: 2 }}>
        <DialogContentText id="alert-dialog-description">
          Your withdrawal request is being processed. Please allow 1-2 days for
          us to review your request and transfer your funds. You will receive
          anotification once your funds have been transferred.
        </DialogContentText>
      </DialogContent>
    </DialogPopup>
  );
}

function KnowMore({ open, handleClose }) {
  return (
    <DialogPopup open={open} handleClose={handleClose}>
      <DialogTitle sx={{ textAlign: "center", mb: 2 }}>
        Know more about withdrawal !
      </DialogTitle>
      <DialogContent>
        <Typography
          sx={{ width: { xs: "100%", sm: "100%" }, textAlign: "justify" }}
        >
          To ensure transparency, all campaign creators must submit valid bills
          for donations. Clearance duration varies based on investigations and
          may take additional time. Your cooperation is crucial for responsible
          fund utilization.
        </Typography>
      </DialogContent>
    </DialogPopup>
  );
}
