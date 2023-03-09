<template>
  <q-layout class="bg-grey-1" view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" />

        <q-btn size="sm" flat label="Página inicial" to="/" />

        <q-space />

        <q-btn round size="sm" flat icon="notifications" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { useSocket } from 'src/composables/socket'

useSocket(1, (data) => {
  console.log(data)
})
</script>
