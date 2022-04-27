import { wrapper } from '../../utils/wrapper'
import { URLS, baseUrl } from '../../constants/urls'

export const getChatList = () => {
  return wrapper('get', baseUrl + URLS.LIST)
}
export const getMessages = (id: string) => {
  return wrapper('get', `${baseUrl + URLS.MESSAGES}?chat_id=${id}`)
}
