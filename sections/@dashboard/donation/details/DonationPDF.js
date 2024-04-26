import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import PropTypes from "prop-types";
import { grey, red } from "@mui/material/colors";
import styles, { newStyles } from "./DonationStyle";
import logo from "@/assets/IFLogo.png";
// ----------------------------------------------------------------------

DonationPDF.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default function DonationPDF({ donation }) {
  const {
    name,
    amount,
    _id,
    donor_id,
    email,
    createdAt,
    pancard,
    address,
    orgPanCard,
    orgAddress,
    orgEightyG,
    orgTwelveA,
  } = donation;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={[styles.gridContainer, styles.mb40]}>
          <Image source={logo} style={{ height: 36 }} />
          <View style={{ alignItems: "flex-end", flexDirection: "column" }}>
            <Text>
              NO 45/4, SRIRAMPURA INSIDE ROYAL ENCLAVE , CRPF Campus Yelahanka
              S.O,{" "}
            </Text>
            <Text>Bengaluru, Karnataka-560037</Text>
          </View>
        </View>

        <View style={newStyles.header1}>
          <Text style={[newStyles.paddingY, newStyles.receipt]}>
            Receipt No: {donor_id}
          </Text>
          <Text style={[newStyles.textCenter, newStyles.paddingY]}>
            Dear {name}{" "}
          </Text>
          <Text
            style={{
              textAlign: "center",
              paddingTop: "10px",
              color: grey[800],
            }}
          >
            We have received your donation of ₹{amount.toLocaleString()}.00.
            Thank you for your generosity.
          </Text>
          <Text
            style={{
              textAlign: "center",
              paddingBottom: "10px",
              color: grey[800],
            }}
          >
            The details of the donation are mentioned below
          </Text>
          <Text style={[newStyles.textCenter]}>Donation/Tax Details</Text>
          <Text style={[newStyles.textCenter, newStyles.caption]}>
            (Refererence No: {donor_id})
          </Text>
          <Text
            style={[newStyles.textCenter, newStyles.amount, newStyles.paddingY]}
          >
            Amount: ₹{amount.toLocaleString()}
          </Text>
          <Text
            style={{
              width: "50%",
              margin: "0 auto",
              textAlign: "center",
              padding: "10px 0",
              color: grey[800],
            }}
          >
            Donations through Impaac Idea Foundation, registered under section
            80G of India's Income Tax Act, 1961 are tax-deductible
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            margin: "20px 50px",
          }}
        >
          <View
            style={{
              flex: 0.5,
              display: "flex",
              justifyContent: "space-between",
              padding: "0 20px",
            }}
          >
            <Text style={[newStyles.h1]}>ORGANIZATION DETAILS: </Text>

            <View style={[newStyles.marginY]}>
              <Text style={[newStyles.bold]}>PAN </Text>
              <Text style={[newStyles.caption]}>AAGCI2897E</Text>
            </View>

            <View style={[newStyles.marginY]}>
              <Text style={[newStyles.bold]}>Registered Address </Text>
              <Text style={[newStyles.caption]}>
                NO 45/4, SRIRAMPURA INSIDE ROYAL ENCLAVE, CRPF Campus Yelahanka
                S.O, Bangalore, Karnataka, India, 560064{" "}
              </Text>
            </View>

            <View style={[newStyles.marginY]}>
              <Text style={[newStyles.bold]}>80G </Text>
              <Text style={[newStyles.caption]}>AAGCI2897EF2022801</Text>
              <Text style={[newStyles.caption]}>
                12-Clause (iv) of first proviso to sub-section (5) of section
                80G
              </Text>
            </View>
            <View style={[newStyles.marginY]}>
              <Text style={[newStyles.bold]}>12A </Text>
              <Text style={[newStyles.caption]}>AAGCI2897EE2021201</Text>
              <Text style={[newStyles.caption]}>
                {" "}
                issued under Sub clause (i) of clause (ac) of sub -section (1)
                of section 12A
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 0.5,
              display: "flex",
              justifyContent: "space-between",
              padding: "0 20px",
            }}
          >
            <Text style={[newStyles.h1]}>DONOR DETAILS:</Text>

            <View style={[newStyles.marginY]}>
              <Text style={[newStyles.bold]}>Issued To:</Text>
              <Text style={[newStyles.caption]}>{name}</Text>
            </View>

            <View style={[newStyles.marginY]}>
              <Text style={[newStyles.bold]}>Address: </Text>
              <Text style={[newStyles.caption]}>{address}</Text>
            </View>

            <View style={[newStyles.marginY]}>
              <Text style={[newStyles.bold]}>PAN:</Text>
              <Text style={[newStyles.caption]}>{pancard}</Text>
            </View>

            <View style={[newStyles.marginY]}>
              <Text style={[newStyles.bold]}>Date</Text>
              <Text style={[newStyles.caption]}>{createdAt}</Text>
            </View>
          </View>
        </View>
        {/* <View>
          <Text style={[newStyles.h1, newStyles.textCenter]}>FOR CLARIFICATION ONLY</Text>
          <View style={{ paddingBottom: '15px', margin: '15px 0', borderBottom: '1px solid red' }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '2px 0',
              }}
            >
              <Text style={[newStyles.caption]}>Amount donated towards Impaac Idea Foundation (A):</Text>
              <Text style={[newStyles.caption]}>INR(₹) [amount]</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '2px 0',
              }}
            >
              <Text style={[newStyles.caption]}>Your support towards GiveIndia (B): </Text>
              <Text style={[newStyles.caption]}>INR(₹) [amount]</Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '2px 0',
              }}
            >
              <Text style={[newStyles.caption]}>Total Amount of this transaction (A+B):</Text>
              <Text style={[newStyles.caption]}>INR(₹) [amount]</Text>
            </View>
          </View>
        </View> */}
        <View style={[styles.footer]}>
          <Text style={{ textAlign: "center" }}>
            *This is computer generated receipt and does not require a
            signature.{" "}
          </Text>
          <Text style={{ textAlign: "center" }}>
            *This e-receipt is invalid in case of non-realization of payment
            instrument, reversal of credit card charge and/or reversal of amount
            for any reason.
          </Text>
          <Text style={{ textAlign: "center" }}>
            *No goods or services were provided to the donor by the organization
            in return for the contribution
          </Text>
        </View>
      </Page>
    </Document>
  );
}
