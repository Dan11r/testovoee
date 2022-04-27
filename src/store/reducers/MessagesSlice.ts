import { createSlice } from '@reduxjs/toolkit'
import { IChatMessage } from './../../interface/chat'
import { fetchMessages } from './asyncAction'
import { PayloadAction } from '@reduxjs/toolkit'

interface IMessagesState {
  isLoading: boolean
  selectedChat: null | string
  mesages: [] | IChatMessage[]
  oldMessages: [] | IChatMessage[]
  newMessages: [] | IChatMessage[]
  error: string
}

const initialState: IMessagesState = {
  isLoading: false,
  selectedChat: null,
  mesages: [],
  oldMessages: [],
  newMessages: [],
  error: '',
}

export const MessageSlice = createSlice({
  name: 'Messages',
  initialState,
  reducers: {
    selectChat(state, action: PayloadAction<string>) {
      state.selectedChat = action.payload
    },
  },
  extraReducers: {
    [fetchMessages.fulfilled.type]: (state, action: PayloadAction<IChatMessage[]>) => {
      state.isLoading = false
      state.error = ''
      state.mesages = action.payload
      state.oldMessages = action.payload.filter((m) => !m.is_new)
      state.newMessages = action.payload.filter((m) => m.is_new)
    },
    [fetchMessages.pending.type]: (state) => {
      state.isLoading = true
    },
    [fetchMessages.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
      state.mesages = []
    },
  },
})
export default MessageSlice.reducer
