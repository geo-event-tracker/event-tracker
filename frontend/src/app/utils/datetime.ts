const getTimePassed = (timestamp: Date) => {
  let currentTime = new Date().getTime() / 1000;
  let eventTime = timestamp.getTime() / 1000;

  const mapping = [
    { label: 'second', maxUnit: 60 },
    { label: 'minute', maxUnit: 60 },
    { label: 'hour', maxUnit: 24 },
    { label: 'day', maxUnit: 60 },
  ]

  let diff = currentTime - eventTime;

  for (let idx = 0; idx < mapping.length; idx++) {
    const { label, maxUnit } = mapping[idx];
    if (diff < maxUnit || idx === mapping.length - 1) {
      return `${diff.toFixed(0)} ${label}${Math.round(diff) !== 1 ? 's' : ''}`
    }
    diff = diff / maxUnit;
  }
  return '-';
}

export default {
  getTimePassed,
}
