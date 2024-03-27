import mitt, { Emitter } from 'mitt';
import axios, { AxiosError } from 'axios';

type Events = {
  loading: void;
  success: { email: string, message: string },
  error: AxiosError<{ message: string }>
}

const axInstance = axios.create({
  baseURL: 'http://localhost:3000/newsletter'
})


const emitter: Emitter<Events> = mitt()

export const newsletterResource = {
  emitter,
  async singUp(email: string) {
    // axios...
    try {
      // > loading -> emit LOADING
      emitter.emit('loading')
      const { data } = await axInstance.post('/sing-up', { email })
      emitter.emit('success', data)
      return data
      // > ok -> emit OK
    } catch (e) {
      // > error -> emit ERROR
      emitter.emit('error', e as AxiosError<{ message: string }>)
    }
  }
}
