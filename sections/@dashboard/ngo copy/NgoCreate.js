import { capitalCase } from 'change-case';
import { useLocation, useParams } from 'react-router-dom';
// @mui
import { Container } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// hooks
import useSettings from '../../../hooks/useSettings';

// components
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import Page from '../../../components/Page';
// sections
// import OrganisationNewForm from '../../sections/@dashboard/organisation/create/OrganisationNewForm';

// ----------------------------------------------------------------------

export default function UserCreate() {
  const { themeStretch } = useSettings();

  const { pathname } = useLocation();

  const { name = '' } = useParams();

  const isEdit = pathname.includes('edit');

  return (
    <Page title="Organisation: Create a new Organisation">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={!isEdit ? 'Create a new Organisation' : 'Edit Oragnisation'}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            { name: 'User', href: PATH_DASHBOARD.organisation.list },
            { name: !isEdit ? 'New organisation' : capitalCase(name) },
          ]}
        />

        {/* <OrganisationNewForm isEdit={isEdit} */}
        {/* //  currentUser={currentUser} */}
        {/* /> */}
      </Container>
    </Page>
  );
}
