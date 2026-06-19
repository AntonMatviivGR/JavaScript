import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export function dateExperiment() {
  console.log(dayjs().add(5, 'days').format('MMMM D'));
  console.log(dayjs().add(1, 'months').format('MMMM D'));
  console.log(dayjs().subtract(1, 'months').format('MMMM D'));
  console.log(dayjs().format('dddd'));
  console.log('----------------');
}

function isWeekend(date) {
  const dayOfWeek = date.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}

export default isWeekend;