import { FC } from 'react'
import styles from './ChatItem.module.scss'

import { Avatar } from '../Avatar'

import { formatHHMM } from './../../utils/dateFormater'

import { MessageSlice } from './../../store/reducers/MessagesSlice'
import { fetchMessages } from './../../store/reducers/asyncAction'
import { useTypedDispatch } from './../../hooks/redux'

import { IChat } from './../../interface/chat'

export const ChatItem: FC<IChat> = (props) => {
  const dispatch = useTypedDispatch()
  const { selectChat } = MessageSlice.actions

  const onImenClick = () => {
    dispatch(selectChat(props.id))
    dispatch(fetchMessages(props.id))
  }
  const time = formatHHMM(props.last_message.created_at)
  return (
    <div onClick={onImenClick} className={styles.chatItem}>
      <div className={styles.avatar}>
        <Avatar src={props.avatar} size={'md'} />
      </div>
      <div className={styles.description}>
        <div className={styles.top}>
          <div className={styles.author}>{props.title}</div>
          <div className={styles.time}>{time}</div>
        </div>
        <span className={styles.message}>{props.last_message.message}</span>
      </div>
    </div>
  )
}
