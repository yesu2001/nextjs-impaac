export const NgoDefaultValue = (ngo) => {
  const address = ngo?.address;
  const reg_cert = ngo?.reg_cert;
  const pan_card = ngo?.pan_card;
  const twelve_a = ngo?.twelve_a;
  const eighty_g = ngo?.eighty_g;
  const csr = ngo?.csr;
  const fcra = ngo?.fcra;
  const fcra_bank = ngo?.fcra_account_details;
  const bank_info = ngo?.bank_info;
  const social_media = ngo?.social_media;
  const user_info = ngo?.base_user?.user_info;

  return {
    name: ngo?.name || '',
    registered_name: ngo?.registered_name || '',
    bio: ngo?.bio || '',
    email: ngo?.email || '',
    phone_number: ngo?.phonenumber || '',
    street: address?.street || '',
    area_code: address?.area_code || '',
    city: address?.city || '',
    state: address?.state || '',
    country: address?.country || '',

    tags: ngo?.tags || [],

    reg_number: reg_cert?.is_verified === 'rejected' ? '' : reg_cert?.number || '',
    reg_doc: reg_cert?.is_verified === 'rejected' ? '' : reg_cert?.document || '',

    pan: pan_card?.is_verified === 'rejected' ? '' : pan_card?.number || '',
    pan_card_doc: pan_card?.is_verified === 'rejected' ? '' : pan_card?.document || '',

    have_twelve_a: twelve_a?.is_verified === 'rejected' || twelve_a?.is_verified === 'verified' || false,
    twelve_a: twelve_a?.is_verified === 'rejected' ? '' : twelve_a?.number || '',
    twelve_a_doc: twelve_a?.is_verified === 'rejected' ? '' : twelve_a?.document || '',
    twelve_a_expiry: twelve_a?.is_verified === 'rejected' ? '' : twelve_a?.expiry_date || '',

    have_eighty_g: eighty_g?.is_verified === 'rejected' || eighty_g?.is_verified === 'verified' || false,
    eighty_g: eighty_g?.is_verified === 'rejected' ? '' : eighty_g?.number || '',
    eighty_g_doc: eighty_g?.is_verified === 'rejected' ? '' : eighty_g?.document || '',
    eighty_g_expiry: eighty_g?.is_verified === 'rejected' ? '' : eighty_g?.expiry_date || '',

    have_csr: csr?.is_verified === 'rejected' || csr?.is_verified === 'verified' || false,
    csr: csr?.is_verified === 'rejected' ? '' : csr?.number || '',
    csr_doc: csr?.is_verified === 'rejected' ? '' : csr?.document || '',

    ben_name: bank_info?.is_verified === 'rejected' ? '' : bank_info?.beneficiary_name || '',
    acc_no: bank_info?.is_verified === 'rejected' ? '' : bank_info?.account_no || '',
    acc_type: bank_info?.is_verified === 'rejected' ? '' : bank_info?.account_type || 'no_account',
    ifsc_code: bank_info?.is_verified === 'rejected' ? '' : bank_info?.ifsc_code || '',
    bank_doc: bank_info?.is_verified === 'rejected' ? '' : bank_info?.document || '',

    have_fcra:
      fcra?.number?.length > 1 || fcra?.is_verified === 'rejected' || fcra?.is_verified === 'verified' || false,
    fcra_no: fcra?.is_verified === 'rejected' ? '' : fcra?.number || '',
    fcra_doc: fcra?.is_verified === 'rejected' ? '' : fcra?.document || '',
    fcra_expiry: fcra?.is_verified === 'rejected' ? '' : fcra?.expiry_date || '',

    f_ben_name: fcra_bank?.is_verified === 'rejected' ? '' : fcra_bank?.beneficiary_name || '',
    f_acc_type: fcra_bank?.is_verified === 'rejected' ? '' : fcra_bank?.account_type || 'no_account',
    f_acc_no: fcra_bank?.is_verified === 'rejected' ? '' : fcra_bank?.account_no || '',
    f_ifsc_code: fcra_bank?.is_verified === 'rejected' ? '' : fcra_bank?.ifsc_code || '',
    f_swift_code: fcra_bank?.is_verified === 'rejected' ? '' : fcra_bank?.swift_code || '',
    f_bank_doc: fcra_bank?.is_verified === 'rejected' ? '' : fcra_bank?.document || '',

    user_first_name: user_info?.is_verified === 'rejected' ? '' : user_info?.first_name || '',
    user_last_name: user_info?.is_verified === 'rejected' ? '' : user_info?.last_name || '',
    user_document_name: user_info?.is_verified === 'rejected' ? '' : user_info?.doc_name || 'no_document',
    user_document_number: user_info?.is_verified === 'rejected' ? '' : user_info?.doc_no || '',
    user_document_front: user_info?.is_verified === 'rejected' ? '' : user_info?.doc_front_side || '',
    user_document_back: user_info?.is_verified === 'rejected' ? '' : user_info?.doc_back_side || '',
    user_relation: user_info?.is_verified === 'rejected' ? '' : user_info?.designation,

    website: social_media?.website || '',
    instagram: social_media?.instagram || '',
    facebook: social_media?.facebook || '',
    youtube: social_media?.youtube || '',
    linkedin: social_media?.linkedin || '',
    twitter: social_media?.twitter || '',
  };
};
