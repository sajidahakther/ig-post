import React, { useState } from 'react'
import Image from './children/image'
import UserBlock from './children/user_block'
import CommentsBlock from './children/comments_block'
import LikesBlock from './children/likes_block'
import styles from './styles'

const App = (props) => {
  const { data } = props
  const [smallScreen, setSmallScreen] = useState(false)
  const onSmallScreen = () => {
    window.innerWidth <= 709 ? setSmallScreen(true) : setSmallScreen(false)
  }
  window.addEventListener('resize', onSmallScreen)

  return (
    <main style={styles.main}>
      {smallScreen && <UserBlock width='100%' data={data} />}
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        {!smallScreen && <UserBlock data={data} />}
        <CommentsBlock data={data} />
        <LikesBlock data={data} />
      </div>
    </main>
  )
}

export default App
