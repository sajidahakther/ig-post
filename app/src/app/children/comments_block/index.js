import React from 'react'
import styles from './styles'
import LikeButton from '../like_button'
import { styleTags } from './helpers'

const CommentsBlock = (props) => {
  const { data } = props
  const comments = data.edge_media_to_comment.edges
  const caption = data.edge_media_to_caption.edges
  return (
    <div style={styles.comments_block}>
      <p style={styles.comment}>
        <span style={styles.username}>{data.owner.username}</span>
        <span
          dangerouslySetInnerHTML={{
            __html: styleTags(caption[0].node.text)
          }}
        />
      </p>
      <ul style={styles.list}>
        {comments.map((item) => {
          return (
            <li style={styles.list_item} key={item.node.id}>
              <p style={styles.comment}>
                <span style={styles.username}>{item.node.owner.username}</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: styleTags(item.node.text)
                  }}
                />
              </p>
              <LikeButton height='12' />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CommentsBlock
