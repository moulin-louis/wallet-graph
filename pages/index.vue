<script setup lang="ts">
import type { EnrichedTransaction } from 'helius-sdk';

const { data, status } = await useFetch<EnrichedTransaction[]>('/api/transactions/all', {
  method: 'GET',
  params: {
    address: '4Tb6PVePDK3ghMDwJsizi73qSWycnfHbrowWUx72n8dy',
  },
});
</script>

<template>
  <div>
    <div v-if="status === 'pending'">
      Pending
    </div>
    <div v-else>
      <div v-if="data === null">
        Data is null
      </div>
      <div v-else>
        <TxView :tx="data[0]" />
      </div>
    </div>
    <!--
  <TopBar>
    <ActivityChart /> <AltAddress /> <Programs /> <Settings />
  <TopBar/>
  <Filters>
    <ResetFilters />
    <ProgramsFilters />
    <AddresssFilters />
    <TokensFilters />
  <Filters />
  <Transactions>
    <ActiveDay>
      < List of transaction {Time, Balance change, program used, txId, Address} />
    <ActiveDay />
  <Transactions/>
  -->
  </div>
</template>
