import { boot } from 'quasar/wrappers'

import { Manager } from "socket.io-client"

import { Notify } from 'quasar'

export default boot(async ({ app }) => {

  let socket

  let manager = new Manager(process.env.API, {
    autoConnect: false
  })

  socket = manager.socket("/")

  manager.open((e) => {

    if (e) {

      socket = null

      if (!socket) {

        Notify.create(e.message)
      }

    } else {

      socket.connect()

    }
  })

  app.provide('socket', socket)
})