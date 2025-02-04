export const getCurrentDateTime = () => {
  const now = new Date()
  return {
    date: now.toISOString().split('T')[0],
    time: now.toTimeString().slice(0, 5),
  }
}

export const isDateTimeInFuture = (date: string, time: string) => {
  const combined = new Date(`${date}T${time}`)
  return combined > new Date()
}
