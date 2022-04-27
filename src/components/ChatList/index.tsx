import { FC } from 'react'
import styles from './ChatList.module.scss'

import { useEffect } from 'react'
import { ChatItem } from '../ChatItem'

import { useTypedDispatch, useTypedSelector } from './../../hooks/redux'
import { fetchChatList } from './../../store/reducers/asyncAction'

import { IChat } from './../../interface/chat'

export const ChatList: FC = () => {
  const dispatch = useTypedDispatch()
  const chatList = useTypedSelector((state) => state.ChatList.chatlist)

  useEffect(() => {
    dispatch(fetchChatList())
  }, [])

  console.log(chatList)
  return (
    <div className={styles.ChatList}>
      <div className={styles.header}>All chats</div>
      {chatList.map((chat) => (
        <ChatItem key={chat.id} {...chat} />
      ))}
    </div>
  )
}
