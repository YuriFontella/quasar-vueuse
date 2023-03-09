<template>
  <q-page padding>
    <div class="row justify-center q-px-sm">
      <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6">

      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'

import { useApi } from 'src/composables/api'

const post = ref({ name: 'Yuri Fontella' })

const { isFetching: loading, error, execute } = useApi('data/stream', { immediate: false }).post(post).json()

async function submit() {
  await execute()
}
</script>
