import styles from './MessagesSection.module.scss'

import { Message } from './../Message'
import { NewMessage } from './../NewMessage'

import { useTypedSelector } from './../../hooks/redux'

export const MessagesSection = () => {
  const Messages = useTypedSelector((state) => state.Messages)

  return (
    <div className={styles.messagesSection}>
      {Messages.oldMessages.map((m) =>
        m.user.you ? (
          <Message date={m.created_at} key={m.id} my={true} text={m.message} main={false} />
        ) : (
          <Message date={m.created_at} key={m.id} my={false} text={m.message} main={false} />
        ),
      )}
      {Messages.newMessages.length > 0 && <NewMessage />}
      {Messages.newMessages.map((m) =>
        m.user.you ? (
          <Message date={m.created_at} key={m.id} my={true} text={m.message} main={false} />
        ) : (
          <Message date={m.created_at} key={m.id} text={m.message} my={false} main={false} />
        ),
      )}
    </div>
  )
}
