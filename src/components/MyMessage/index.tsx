import { FC } from 'react'
import styles from './MyMessage.module.scss'
import { Time } from './../Time'

import { IMyMessage } from './interface'

export const MyMessage: FC<IMyMessage> = ({ text, date }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.myMessage}>
        <span>{text}</span>
        <Time date={date} my={true} />
      </div>
    </div>
  )
}
