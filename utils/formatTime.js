import { format, getTime, formatDistanceToNow, intervalToDuration, formatDuration } from 'date-fns';

// ----------------------------------------------------------------------

export function fDate(date) {
  return format(new Date(date), 'dd MMMM yyyy');
}

export function fDateTime(date) {
  return format(new Date(date), 'dd MMM yyyy HH:mm');
}

export function fTimestamp(date) {
  return getTime(new Date(date));
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), 'dd/MM/yyyy hh:mm p');
}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true
  });
}

export function fDayLeft() {
  const duration = intervalToDuration({
    start: new Date(2023, 6, 2, 0, 0, 15),
    end: new Date(),
  })
  return formatDuration(duration, {
    delimiter: ', '
  })
}
