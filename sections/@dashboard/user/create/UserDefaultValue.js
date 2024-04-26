export const UserDefaultValue = (profile) => {
  const isBankRejected = profile?.bank_info?.is_verified === 'rejected';
  const isUserRejected = profile?.user_info?.is_verified === 'rejected';
  return {
    name: profile?.name || '',
    bio: profile?.about || '',
    email: profile?.email || '',
    phone_number: profile?.phonenumber || '',
    street: profile?.address?.street || '',
    area_code: profile?.address?.area_code || '',
    city: profile?.address?.city || '',
    state: profile?.address?.state || '',
    country: profile?.address?.country || '',

    ben_name: isBankRejected ? '' : profile?.bank_info?.beneficiary_name || '',
    acc_no: isBankRejected ? '' : profile?.bank_info?.account_no || '',
    acc_type: isBankRejected ? '' : profile?.bank_info?.account_type || 'current_account',
    ifsc_code: isBankRejected ? '' : profile?.bank_info?.ifsc_code || '',
    bank_doc: isBankRejected ? '' : profile?.bank_info?.document || '',

    user_first_name: isUserRejected ? '' : profile?.user_info?.first_name || '',
    user_last_name: isUserRejected ? '' : profile?.user_info?.last_name || '',
    user_document_name: isUserRejected ? '' : profile?.user_info?.doc_name || 'aadhar_card',
    user_document_number: isUserRejected ? '' : profile?.user_info?.doc_no || '',
    user_document_front: isUserRejected ? '' : profile?.user_info?.doc_front_side || '',
    user_document_back: isUserRejected ? '' : profile?.user_info?.doc_back_side || '',

    instagram: profile?.social_links?.instagram || '',
    facebook: profile?.social_links?.facebook || '',
    linkedin: profile?.social_links?.linkedin || '',
    twitter: profile?.social_links?.twitter || '',
  };
};
