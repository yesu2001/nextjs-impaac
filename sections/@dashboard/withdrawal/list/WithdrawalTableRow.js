import PropTypes from 'prop-types';
// @mui
import { Stack, TableCell, TableRow, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../../utils/formatNumber';
import { fDate } from '../../../../utils/formatTime';
// components
import Label from '../../../../components/Label';


// ----------------------------------------------------------------------

WithdrawalTableRow.propTypes = {
  row: PropTypes.object.isRequired,
  selected: PropTypes.bool,
  onSelectRow: PropTypes.func,
  onViewRow: PropTypes.func,
  onEditRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function WithdrawalTableRow({ row, selected, onViewRow, onEditRow, onDeleteRow }) {
  const theme = useTheme();

  const { _id, createdAt, campaign, status, amount, accountNumber } = row;




  return (
    <TableRow hover selected={selected}>

      <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
        <Stack>
          <Typography variant="subtitle2">
            {campaign?.title}
          </Typography>
          <Typography variant="body2">
            {_id}
          </Typography>

        </Stack>
      </TableCell>

      <TableCell align="left">{fDate(createdAt)}</TableCell>

      <TableCell align="center">{fCurrency(amount)}</TableCell>

      <TableCell align="center" sx={{ textTransform: 'capitalize' }}>
        {accountNumber}
      </TableCell>

      <TableCell align="left">
        <Label
          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
          color={
            (status === 'success' && 'success') || (status === 'cancelled' && 'error') || (status === 'processing' && 'warning') ||
            'default'
          }
          sx={{ textTransform: 'capitalize' }}
        >
          {status}
        </Label>
      </TableCell>
    </TableRow>
  );
}
