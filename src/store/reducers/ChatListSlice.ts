import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

import { IChat } from './../../interface/chat'
import { fetchChatList } from './asyncAction'

interface IChatListState {
  isLoading: boolean
  chatlist: [] | IChat[]
  error: string
}
const initialState: IChatListState = {
  isLoading: false,
  chatlist: [],
  error: '',
}

export const ChatListSlice = createSlice({
  name: 'ChatList',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchChatList.fulfilled.type]: (state, action: PayloadAction<IChat[]>) => {
      state.isLoading = false
      state.error = ''
      state.chatlist = action.payload
    },
    [fetchChatList.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchChatList.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
      state.chatlist = []
    },
  },
})
export default ChatListSlice.reducer
