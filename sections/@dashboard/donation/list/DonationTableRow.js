import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import { Checkbox, TableRow, TableCell, Typography, Stack, Link, MenuItem } from '@mui/material';
// utils
import { fDate } from '../../../../utils/formatTime';
import createAvatar from '../../../../utils/createAvatar';
import { fCurrency } from '../../../../utils/formatNumber';
// components
import Label from '../../../../components/Label';
import Avatar from '../../../../components/Avatar';
import Iconify from '../../../../components/Iconify';
import { TableMoreMenu } from '../../../../components/table';
import { PATH_PAGE } from '../../../../routes/paths';

// ----------------------------------------------------------------------

DonationTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
  onEditRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function DonationTableRow({ row, selected, onSelectRow, onViewRow, onEditRow, onDeleteRow }) {
  const theme = useTheme();

  const { sent, name, _id, donor_id, createdAt, currency_code: currencyCode, amount, isAnonymous, campaign } = row;

  const [openMenu, setOpenMenuActions] = useState(null);

  const handleOpenMenu = (event) => {
    setOpenMenuActions(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenuActions(null);
  };

  return (
    <TableRow hover selected={selected}>
      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Stack>
          <Typography variant="subtitle2" sx={{ width: 200 }} noWrap>
            {campaign?.title}
          </Typography>

          {/* <Link noWrap variant="body2" onClick={onViewRow} sx={{ color: 'text.disabled', cursor: 'pointer' }}>
            {_id}
          </Link> */}
        </Stack>
      </TableCell>

      <TableCell align="left">{fDate(createdAt)}</TableCell>

      <TableCell align="center">
        {currencyCode} {fCurrency(amount)}
      </TableCell>

      {/* <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
        {isAnonymous}
      </TableCell> */}

      <TableCell align="left">
        <Label
          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
          color="success"
          sx={{ textTransform: 'capitalize' }}
        >
          Success
        </Label>
      </TableCell>

      <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
        {/* {isAnonymous} */}
        <Link href={PATH_PAGE.paymentClaim(donor_id)}> Click Here</Link>
      </TableCell>

      {/* <TableCell align="right">
        <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem
                onClick={() => {
                  onViewRow();
                  handleCloseMenu();
                }}
              >
                <Iconify icon={'eva:eye-fill'} />
                View
              </MenuItem>

            </>
          }
        />
      </TableCell> */}
    </TableRow>
  );
}
