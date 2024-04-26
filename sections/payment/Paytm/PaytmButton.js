import { LoadingButton } from "@mui/lab";
import { nanoid } from "nanoid";
import { useSnackbar } from "notistack";
import { useState } from "react";
import ReactGA from "react-ga";
import CircularLoader from "@/components/CircularLoader";
import { createDonorHelper } from "@/helper/donor";
import { createTokenPaytm } from "@/helper/paytm";
// import { refreshCampaign } from '../../../redux/slices/campaign';
// import { useDispatch } from '../../../redux/store';
import { DonorformValidate } from "../DonorValidation";
import useAuth from "@/hooks/useAuth";

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const PaytmButton = ({ donorInfo }) => {
  const { campaign, title, user, amount, total_amount } = donorInfo;
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  // const dispatch = useDispatch();
  const { user: authUser } = useAuth();

  async function onScriptLoad(txnToken, orderId, amount, total_amount) {
    const res = await loadScript(
      `${process.env.NEXT_PUBLIC_PAYTM_URL}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`
    );

    if (!res) {
      alert("Paytm SDK failed to load. Are you online?");
      return;
    }
    const config = {
      root: "",
      flow: "DEFAULT",
      data: {
        orderId: orderId /* update order id */,
        token: txnToken /* update token value */,
        tokenType: "TXN_TOKEN",
        amount: total_amount /* update amount */,
      },
      payMode: {
        labels: {},
        filter: {
          exclude: [],
        },
        order: ["CC", "DC", "NB", "UPI", "PPBL", "PPI", "BALANCE"],
      },
      website: "WEBSTAGING",
      merchant: {
        mid: process.env.NEXT_PUBLIC_PAYTM_MID,
        name: "Impaac Foundation",
        redirect: true,
      },
      handler: {
        transactionStatus: function transactionStatus(paymentStatus) {
          setLoading(false);
        },
        notifyMerchant: function (eventName, data) {},
      },
    };

    if (window.Paytm && window.Paytm.CheckoutJS) {
      window.Paytm.CheckoutJS.onLoad(() => {
        // initialze configuration using init method
        window.Paytm.CheckoutJS.init(config)
          .then(() => {
            // after successfully updating configuration, invoke JS Checkout
            window.Paytm.CheckoutJS.invoke();
            setLoading(false);
            // dispatch(refreshCampaign())
          })
          .catch((error) => {
            console.log("error => ", error);
            setLoading(false);
          });
      });
    }
  }

  const makePayment = (e) => {
    e.preventDefault();
    const error = DonorformValidate(donorInfo);
    if (error) {
      enqueueSnackbar(error, {
        variant: "error",
      });
      return false;
    }
    ReactGA.event({
      category: `${title}`,
      action: "Donate now(Paytm)",
    });
    setLoading(true);
    const donor_id = nanoid();
    donorInfo.donor_id = donor_id;
    donorInfo.gateway_name = "paytm";
    createDonorHelper(campaign, user, authUser.token, donorInfo).then(
      (data) => {
        if (data?.error) {
          console.log(data?.error);
        } else {
          createTokenPaytm(donorInfo).then((response) => {
            onScriptLoad(
              response.data.body.txnToken,
              response.orderId,
              amount,
              total_amount
            );
          });
        }
      }
    );
  };

  return (
    <div>
      {loading && <CircularLoader />}

      <LoadingButton
        variant="contained"
        size="large"
        fullWidth
        text="Donate Now"
        onClick={makePayment}
        loading={loading}
      >
        Paytm Wallet / UPI
      </LoadingButton>
    </div>
  );
};

export default PaytmButton;
