import React from 'react'
import styles from './styles'

const UserIcon = (props) => {
  const { data } = props
  return (
    <img
      src={data.owner.profile_pic_url}
      style={styles}
      alt={data.owner.full_name}
    />
  )
}

export default UserIcon
