export function setTimeAgo (timeStamp) {
  const date = new Date()
  const nowTimeStamp = Math.floor(date.getTime() / 1000)
  const seconds = Number(nowTimeStamp - timeStamp)
  const d = Math.floor(seconds / (3600 * 24))
  const y = Math.floor(seconds / (3600 * 24 * 365))
  const day = d > 0 ? d + (d === 1 ? ' day ' : ' days ') : ''
  const year = y > 0 ? y + (y === 1 ? ' year ' : ' years ') : ''
  if (seconds > 365 * 24 * 3600) {
    return year + 'ago'
  }
  if (seconds > 2 * 24 * 3600) {
    return day + 'ago'
  }
  if (seconds > 24 * 3600) {
    return 'yesterday'
  }
  if (seconds > 3600) {
    return 'a few hours ago'
  }
  if (seconds > 60) {
    return Math.floor(seconds / 60) + ' minutes ago'
  }
}

export function setLikeCount (likes) {
  return likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
