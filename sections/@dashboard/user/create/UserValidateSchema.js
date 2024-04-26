import * as Yup from 'yup';
import { bandAccountRegex, ifscCodeRegex, socialLinkRegex, youtubeLinkRegex } from '../../../../utils/regex';

export const UserValidationSchema = [
  Yup.object().shape({
    name: Yup.string()
      .required('Name of the organisation is required')
      .min(5, 'Enter valid name')
      .max(200, 'Max of 200 letters'),
    bio: Yup.string().required('Bio is required').min(50, 'Minimum of 50 letters.').max(300, 'Maximum 0f 300 letters.'),
  }),

  Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    phone_number: Yup.string().min(10, 'Mobile Number is not valid').required('Phone Number is required'),
    street: Yup.string().required('Street no / building Name is required').min(10, 'Enter valid address'),
    area_code: Yup.string()
      .required('Pincode is required')
      .min(6, 'Enter 6 digit Pin Code')
      .max(6, 'Enter 6 digit Pin Code'),
    city: Yup.string(),
    state: Yup.string(),
    country: Yup.string(),
  }),

  Yup.object().shape({
    ben_name: Yup.string().required('Beneficiery Name is required').min(5, 'Enter valid name'),
    acc_no: Yup.string()
      .matches(bandAccountRegex, 'Account Number is not valid')
      .required('Account number is required')
      .min(10, 'Enter valid account number'),
    acc_type: Yup.string().required('Account type is required').min(5, 'Enter valid account type'),
    ifsc_code: Yup.string()
      .transform((value) => value && value.toUpperCase())
      .matches(ifscCodeRegex, 'IFSC code is not valid')
      .required('IFSC Code is required')
      .min(10, 'Enter valid IFSC code'),
    bank_doc: Yup.string().required('Cheque book/passbook photo required'),
  }),

  Yup.object().shape({
    user_first_name: Yup.string().required('First name is required'),
    user_last_name: Yup.string().required('Last name is required'),
    user_document_name: Yup.string(),
    user_document_front: Yup.string().required('Document is required'),
    user_document_back: Yup.string().when('user_document_name', {
      is: 'pan_card',
      then: Yup.string(),
      otherwise: Yup.string().required('Document back is required'),
    }),
    user_document_number: Yup.string().required('Document number is required'),
  }),
  Yup.object().shape({
    instagram: Yup.string()
      .nullable()
      .transform((curr, orig) => (orig === '' ? null : curr))
      .matches(socialLinkRegex, 'Instagram Link is not valid'),
    facebook: Yup.string()
      .nullable()
      .transform((curr, orig) => (orig === '' ? null : curr))
      .matches(socialLinkRegex, 'Facebook Link is not valid'),
    linkedin: Yup.string()
      .nullable()
      .transform((curr, orig) => (orig === '' ? null : curr))
      .matches(socialLinkRegex, 'Linkedin Link is not valid'),
    twitter: Yup.string()
      .nullable()
      .transform((curr, orig) => (orig === '' ? null : curr))
      .matches(socialLinkRegex, 'Twitter Link is not valid'),
  }),
];
