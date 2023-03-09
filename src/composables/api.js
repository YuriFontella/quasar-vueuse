import { createFetch } from '@vueuse/core'

import { Cookies, Notify } from 'quasar'

const useApi = createFetch({
  baseUrl: process.env.API,
  options: {
    async beforeFetch({ options }) {

      const cookie = Cookies.get('token')

      if (cookie) {
        options.headers['x-access-token'] = cookie
      }

      return { options }
    },

    async onFetchError(error) {
      Notify.create(error.data.message)
    }
  }
})

export { useApi }
