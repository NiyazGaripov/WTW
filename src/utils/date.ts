import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';

dayjs.extend(durationPlugin);

export const formatCommentDate = (date: string) => dayjs(date).format('MMMM DD, YYYY');
