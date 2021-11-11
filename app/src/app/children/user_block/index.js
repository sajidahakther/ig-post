import React from 'react'
import styles from './styles'
import UserIcon from './children/user_icon'
import VerifiedIcon from './children/verified_icon'

const UserBlock = (props) => {
  const { data } = props
  return (
    <div style={{ width: props.width, background: '#fff' }}>
      <div style={styles.user_block}>
        <div style={styles.user_icon}>
          <UserIcon data={data} />
        </div>
        <div style={styles.user_details}>
          <h4 style={styles.username}>
            {data.owner.username}
            {data.owner.is_verified === true && (
              <span style={styles.verified_icon}>
                <VerifiedIcon />
              </span>
            )}
          </h4>
          <p style={styles.location}>{data.location.name}</p>
        </div>
      </div>
    </div>
  )
}

export default UserBlock
