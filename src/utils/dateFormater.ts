import dayjs from 'dayjs'

export const formatHHMM = (date: number) => {
  return dayjs(date).format('HH:mm')
}

export const formatDDMMYYYY = (date: number) => {
  return dayjs(date).format('DD:MM:YYYY')
}
