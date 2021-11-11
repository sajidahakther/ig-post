import React from 'react'
import LikeButton from '../like_button'
import styles from './styles'
import { setLikeCount, setTimeAgo } from './helpers'

const LikesBlock = (props) => {
  const { data } = props
  return (
    <div style={styles.likes}>
      <div>
        <p style={styles.like_count}>{setLikeCount(data.edge_media_preview_like.count)} likes</p>
        <p style={styles.time_ago}>{setTimeAgo(1540196136)}</p>
      </div>
      <LikeButton />
    </div>
  )
}

export default LikesBlock
