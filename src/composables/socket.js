import { onMounted, onUnmounted, inject } from 'vue'

import { Notify } from 'quasar'

export function useSocket(subscribe, action) {

  try {

    const socket = inject('socket')

    if (socket) {

      onMounted(() => socket.on(subscribe, (data) => action(data)))
      onUnmounted(() => socket.off(subscribe))
    }

  } catch (e) {

    Notify.create(e.message)

  }

}