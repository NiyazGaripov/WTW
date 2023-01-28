import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';

dayjs.extend(durationPlugin);

export const formatCommentDate = (date: string): string => dayjs(date).format('MMMM DD, YYYY');

export const getFilmDuration = (duration: number): string => {
  const filmDuration = dayjs.duration(duration, 'minutes');
  const hours: number = filmDuration.hours();
  const minutes: number = filmDuration.minutes();

  let normalizeHours: string = hours > 0 ? `${hours}h` : '';
  const normalizeMinutes: string = minutes > 0 ? `${minutes}m` : '';

  if (hours && minutes) {
    normalizeHours += ' ';
  }

  return normalizeHours + normalizeMinutes;
};
