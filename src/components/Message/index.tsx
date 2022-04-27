import { FC } from 'react'
import styles from './Message.module.scss'

import { MyMessage } from './../MyMessage'
import { SomeoneMessage } from './../SomeoneMessage'

import { IMessage } from './interface'

export const Message: FC<IMessage> = ({ my, main, text, date }) => {
  return my ? (
    <MyMessage date={date} text={text} />
  ) : (
    <SomeoneMessage date={date} text={text} main={main} />
  )
}
