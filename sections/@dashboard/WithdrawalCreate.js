import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// @mui
import { Container } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
// sections
import { getAuserHelper } from '../../helper/user';
import useAuth from '../../hooks/useAuth';
import WithdrawalInfo from '../../sections/@dashboard/withdrawal/details/WithdrawalCreate';
import { getCampaignHelper } from '../../helper/campaign';

// ----------------------------------------------------------------------

export default function WithdrawalCreate() {
  const { themeStretch } = useSettings();

  const { id } = useParams();

  const { user } = useAuth();

  const [userData, setUserData] = useState();

  const [campaign, setCampaign] = useState({});

  useEffect(() => {
    preload(id);
    preloadCampaign();
  }, []);

  const preload = () => {
    getAuserHelper(user.uid, user.token).then((data) => {
      if (data.error) {
        console.log(data.error);
      }
      setUserData(data);
    });
  };

  // Fetch Campaign
  const preloadCampaign = () => {
    getCampaignHelper(id).then(async (data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setCampaign(data);
      }
    });
  };

  return (
    <Page title="Withdrawal Page">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        {userData && campaign && <WithdrawalInfo userData={userData} campaign={campaign} />}
      </Container>
    </Page>
  );
}
