import { FC } from 'react'
import styles from './SomeoneMessage.module.scss'

import { Avatar } from './../Avatar'
import { Time } from './../Time'

import { ISomeoneMessage } from './interface'

export const SomeoneMessage: FC<ISomeoneMessage> = ({ main, date, text }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.someoneMessage}>
        {main && (
          <>
            <div className={styles.userName}>Dianne Russell</div>
            <div className={styles.avatar}>
              <Avatar
                src={
                  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpikstok.ru%2Fimages%2Fimages%2F1531765189197.jpg&f=1&nofb=1'
                }
                size={'sm'}
              />
            </div>
          </>
        )}
        <span>{text}</span>
        <Time date={date} my={false} />
      </div>
    </div>
  )
}
