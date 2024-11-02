<script setup lang="ts">
import type { EnrichedTransaction } from 'helius-sdk';

const { data } = await useFetch<EnrichedTransaction[]>('/api/transactions/all', {
  method: 'GET',
  params: {
    address: '4Tb6PVePDK3ghMDwJsizi73qSWycnfHbrowWUx72n8dy',
  },
});
</script>

<template>
  <div>
    <TopBar />
    <FiltersBar />
    <div v-if="data === null">
      Data is null
    </div>
    <div v-else>
      <VirtualScroller
        :items="data"
        :item-size="100"
        class="border border-surface-200 dark:border-surface-700 rounded w-full h-screen"
      >
        <template #item="{ item }">
          <TxView :tx="item" />
        </template>
      </VirtualScroller>
    </div>
  </div>
</template>
