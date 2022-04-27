import { FC } from 'react'
import { IPage } from '../../interface/page'

import styles from './PageIndex.module.scss'

import { ChatList } from './../../components/ChatList'
import { MessagesSection } from './../../components/MessagesSection'
import { Header } from './../../components/Header'

export const PageIndex: FC<IPage> = (props: IPage) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.rightBar}>
          <ChatList />
        </div>
        <div className={styles.mainSection}>
          <Header />
          <MessagesSection />
        </div>
      </div>
    </>
  )
}
