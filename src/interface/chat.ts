export interface IChat {
  id: string
  created_at: number
  title: string
  avatar: string
  private: boolean
  last_message: {
    created_at: number
    user_id: string
    user_name: string
    user_surname: string
    you: boolean
    message: string
  }
  users: IUser[]
  count_unread: number
}

export interface IChatMessage {
  id: string
  created_at: number
  user: IUserMessage
  message: string
  is_new: boolean
}

export interface IUser {
  id: string
  name: string
  surname: string
  avatar: string
}

export interface IUserMessage extends IUser {
  you: boolean
}
