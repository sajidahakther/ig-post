import React, { useState } from 'react'
import LikedIcon from './children/liked_icon'
import UnLikedIcon from './children/unliked_icon'

const LikeButton = (props) => {
  const [liked, setLike] = useState(false)
  return (
    <div onClick={() => setLike(!liked)}>
      {liked
        ? (
          <LikedIcon height={props.height} />
          )
        : (
          <UnLikedIcon height={props.height} />
          )}
    </div>
  )
}

export default LikeButton
