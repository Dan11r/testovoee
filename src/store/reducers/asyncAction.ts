import { createAsyncThunk } from '@reduxjs/toolkit'
import { getChatList, getMessages } from './../../api/chat'

export const fetchChatList = createAsyncThunk('chatList/fethAll', async (_, thunkAPI) => {
  try {
    const { response } = await getChatList()
    return response
  } catch (e) {
    return thunkAPI.rejectWithValue('не удалось загрузить сиписок чатов')
  }
})

export const fetchMessages = createAsyncThunk('messages/fetch', async (id: string, thunkAPI) => {
  try {
    const { response } = await getMessages(id)
    return response
  } catch (e) {
    return thunkAPI.rejectWithValue('не удалось загрузить сиписок сообщений')
  }
})
