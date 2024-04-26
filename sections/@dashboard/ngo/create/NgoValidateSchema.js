import * as Yup from "yup";
import {
  bandAccountRegex,
  ifscCodeRegex,
  socialLinkRegex,
  youtubeLinkRegex,
} from "../../../../utils/regex";

export const NgoValidationSchema = [
  Yup.object().shape({
    name: Yup.string()
      .required("Name of the organisation is required")
      .min(5, "Enter valid name")
      .max(200, "Max of 200 letters"),
    registered_name: Yup.string(),
    bio: Yup.string()
      .required("Bio / about is required")
      .min(50, "Minimum of 50 letters.")
      .max(300, "Maximum 0f 300 letters."),
  }),

  Yup.object().shape({
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    phone_number: Yup.string()
      .min(10, "Mobile Number is not valid")
      .required("Phone Number is required"),
    street: Yup.string()
      .required("Street no / building Name is required")
      .min(10, "Enter valid address"),
    area_code: Yup.string()
      .required("PinCode is required")
      .min(6, "Enter 6 digit Pin Code")
      .max(6, "Enter 6 digit Pin Code"),
    city: Yup.string(),
    state: Yup.string(),
    country: Yup.string(),
  }),

  Yup.object().shape({
    reg_number: Yup.string()
      .required("Registration/Trust Deed/MOA Number is required")
      .min(3, "Invalid registration number")
      .max(30, "Invalid registration number")
      .transform((value) => value && value.toUpperCase()),
    reg_doc: Yup.string().required(
      "Registration/Trust Deed/MOA Document is required"
    ),

    pan: Yup.string()
      .required("Pan Card Number is required")
      .transform((value) => value && value.toUpperCase()),
    pan_card_doc: Yup.string().required("Pan Card Document is required"),

    have_twelve_a: Yup.boolean().required(
      "Please indicate whether you have a 12a"
    ),
    twelve_a: Yup.string().when("have_twelve_a", {
      is: (value) => value,
      then: Yup.string().required("12a Number is required"),
      otherwise: Yup.string(),
    }),
    twelve_a_doc: Yup.string().when("have_twelve_a", {
      is: (value) => value,
      then: Yup.string().required("12a Document is required"),
      otherwise: Yup.string(),
    }),
    twelve_a_expiry: Yup.string().when("have_twelve_a", {
      is: (value) => value,
      then: Yup.string().required("12a expiry is required"),
      otherwise: Yup.string(),
    }),

    have_eighty_g: Yup.boolean().required(
      "Please indicate whether you have a 80g"
    ),
    eighty_g: Yup.string().when("have_eighty_g", {
      is: (value) => value,
      then: Yup.string().required("80g Number is required"),
      otherwise: Yup.string(),
    }),
    eighty_g_doc: Yup.string().when("have_eighty_g", {
      is: (value) => value,
      then: Yup.string().required("80g Document is required"),
      otherwise: Yup.string(),
    }),
    eighty_g_expiry: Yup.string().when("have_eighty_g", {
      is: (value) => value,
      then: Yup.string().required("12a expiry is required"),
      otherwise: Yup.string(),
    }),

    have_csr: Yup.boolean().required("Please indicate whether you have a CSR"),
    csr: Yup.string().when("have_csr", {
      is: (value) => value,
      then: Yup.string().required("CSR Number is required"),
      otherwise: Yup.string(),
    }),
    csr_doc: Yup.string().when("have_csr", {
      is: (value) => value,
      then: Yup.string().required("CSR Document is required"),
      otherwise: Yup.string(),
    }),
  }),

  Yup.object().shape({
    ben_name: Yup.string()
      .required("Beneficiery Name is required")
      .min(5, "Enter valid name"),
    acc_no: Yup.string()
      .matches(bandAccountRegex, "Account Number is not valid")
      .required("Account number is required")
      .min(10, "Enter valid account number"),
    acc_type: Yup.string()
      .required("Account type is required")
      .oneOf(
        ["current_account", "savings_account"],
        "Select a valid account type"
      ),
    ifsc_code: Yup.string()
      .transform((value) => value && value.toUpperCase())
      .matches(ifscCodeRegex, "IFSC code is not valid")
      .required("IFSC Code is required")
      .min(10, "Enter valid IFSC code"),
    bank_doc: Yup.string().required("Cheque book/passbook photo required"),
  }),

  Yup.object().shape({
    have_fcra: Yup.boolean().required(
      "Please indicate whether you have a FCRA Certificate"
    ),
    fcra_no: Yup.string().when("have_fcra", {
      is: (value) => value,
      then: Yup.string()
        .required("FCRA Number is required")
        .transform((value) => value && value.toUpperCase()),
      otherwise: Yup.string(),
    }),
    fcra_doc: Yup.string().when("have_fcra", {
      is: (value) => value,
      then: Yup.string().required("FCRA Document is required"),
      otherwise: Yup.string(),
    }),
    fcra_expiry: Yup.string().when("have_fcra", {
      is: (value) => value,
      then: Yup.string().required("Expiry date is required"),
      otherwise: Yup.string(),
    }),
    f_ben_name: Yup.string().when("have_fcra", {
      is: (value) => value,
      then: Yup.string().required("Beneficiary Name is required"),
      otherwise: Yup.string(),
    }),
    f_acc_no: Yup.string().when("have_fcra", {
      is: (value) => value,
      then: Yup.string()
        .matches(bandAccountRegex, "Account number is not valid")
        .required("Account Number is required"),
      otherwise: Yup.string(),
    }),
    f_acc_type: Yup.string().when("have_fcra", {
      is: (value) => value,
      then: Yup.string()
        .required("Account type is required")
        .oneOf(
          ["current_account", "savings_account"],
          "Select a valid account type"
        ),
      otherwise: Yup.string(),
    }),
    f_ifsc_code: Yup.string().when("have_fcra", {
      is: (value) => value,
      then: Yup.string()
        .required("IFSC code is required")
        .transform((value) => value && value.toUpperCase()),
      otherwise: Yup.string(),
    }),
    f_bank_doc: Yup.string().when("have_fcra", {
      is: (value) => value,
      then: Yup.string().required(
        "Cancelled Cheque / Bank statement / PassBook Document is required"
      ),
      otherwise: Yup.string(),
    }),
    f_swift_code: Yup.string().when("have_fcra", {
      is: (value) => value,
      then: Yup.string(),
      otherwise: Yup.string(),
    }),
  }),

  Yup.object().shape({
    user_first_name: Yup.string().required("First name is required"),
    user_last_name: Yup.string().required("Last name is required"),
    user_document_name: Yup.string()
      .required("Document is required")
      .oneOf(
        ["pan_card", "aadhar_card", "passport"],
        "Select a valid document name"
      ),
    user_document_front: Yup.string().required("Document is required"),
    user_document_back: Yup.string().when("user_document_name", {
      is: "pan_card",
      then: Yup.string(),
      otherwise: Yup.string().required("Document back is required"),
    }),
    user_relation: Yup.string().required("Relation with NGO is required"),
    user_document_number: Yup.string().required("Document number is required"),
  }),
  Yup.object().shape({
    website: Yup.string(),
    instagram: Yup.string()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .matches(socialLinkRegex, "Instagram Link is not valid"),
    facebook: Yup.string()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .matches(socialLinkRegex, "Facebook Link is not valid"),
    youtube: Yup.string()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .matches(youtubeLinkRegex, "YouTube Link is not valid"),
    linkedin: Yup.string()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .matches(socialLinkRegex, "Linkedin Link is not valid"),
    twitter: Yup.string()
      .nullable()
      .transform((curr, orig) => (orig === "" ? null : curr))
      .matches(socialLinkRegex, "Twitter Link is not valid"),
  }),
];
