import { sentenceCase } from 'change-case';
import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Button, Link, MenuItem, TableCell, TableRow, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../../utils/formatNumber';
import { fDate } from '../../../../utils/formatTime';
// components
import ConfirmDialog from '../../../../components/ConfirmDialog';
import Iconify from '../../../../components/Iconify';
import Image from '../../../../components/Image';
import Label from '../../../../components/Label';
import { TableMoreMenu } from '../../../../components/table';
import useToggle from '../../../../hooks/useToggle';

// ----------------------------------------------------------------------

CampaignTableRow.propTypes = {
  row: PropTypes.object,
  selected: PropTypes.bool,
  onEditRow: PropTypes.func,
  onSelectRow: PropTypes.func,
  onDeleteRow: PropTypes.func,
};

export default function CampaignTableRow({ row, selected, onEditRow, onViewRow, onSelectRow, onDeleteRow }) {
  const theme = useTheme();

  const { title, gallery, imageURL, createdAt, status, total_collect_amount: collectAmount } = row;

  const { toggle: openConfirm, onOpen: onOpenConfirm, onClose: onCloseConfirm } = useToggle();

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
        <Image
          disabledEffect
          alt={title}
          src={gallery[0]?.preview || imageURL}
          sx={{ borderRadius: 1.5, width: 48, height: 48, mr: 2 }}
        />
        <Link noWrap variant="body2" onClick={onViewRow} sx={{ cursor: 'pointer' }}>
          {title.substring(0, 30)}...
        </Link>
      </TableCell>

      <TableCell>{createdAt ? fDate(createdAt) : 'No date'}</TableCell>

      <TableCell align="center">
        <Label
          variant={theme.palette.mode === 'light' ? 'ghost' : 'filled'}
          color={(status === 'stop' && 'error') || (status === 'pending' && 'warning') || 'success'}
          sx={{ textTransform: 'capitalize' }}
        >
          {status ? sentenceCase(status) : ''}
        </Label>
      </TableCell>

      <TableCell align="right">{fCurrency(collectAmount)}</TableCell>

      <TableCell align="right">
        <TableMoreMenu
          open={openMenu}
          onOpen={handleOpenMenu}
          onClose={handleCloseMenu}
          actions={
            <>
              <MenuItem
                onClick={() => {
                  onOpenConfirm();
                  handleCloseMenu();
                }}
                sx={{ color: 'error.main' }}
              >
                <Iconify icon={'eva:trash-2-outline'} />
                Delete
              </MenuItem>
              <MenuItem
                onClick={() => {
                  onEditRow();
                  handleCloseMenu();
                }}
              >
                <Iconify icon={'eva:edit-fill'} />
                Edit
              </MenuItem>
            </>
          }
        />

        <ConfirmDialog
          open={openConfirm}
          onClose={onCloseConfirm}
          title={
            <Typography gutterBottom>
              Are you sure you want to delete <strong>{title.substring(0, 20)}</strong>?
            </Typography>
          }
          actions={
            <>
              <Button variant="outlined" color="inherit" onClick={onCloseConfirm}>
                Cancel
              </Button>
              <Button variant="contained" color="error" onClick={onDeleteRow}>
                Delete
              </Button>
            </>
          }
        />
      </TableCell>
    </TableRow>
  );
}
