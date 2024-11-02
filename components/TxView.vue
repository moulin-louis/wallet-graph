<script setup lang="ts">
import { useToast } from 'primevue/usetoast';
import type { TxViewProps } from '~/types/TxViewProps';

const toast = useToast();
const { tx } = defineProps<TxViewProps>();
const date = new Date(tx.timestamp);
const copySignature = async () => {
  navigator.clipboard.writeText(tx.signature);
  console.log('calling toast add');
  toast.add({
    severity: 'success',
    summary: 'Copied',
    detail: 'Signature copied to clipboard',
    life: 3000,
  });
};
</script>

<template>
  <Card class="mb-3">
    <template #content>
      <div class="flex items-center gap-4">
        <Chip :label="date.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })
          " class="bg-gray-100" />

        <div class="flex-grow">
          <span class="text-lg">
            <i class="pi pi-user mr-2" />
            {{ tx.source }}
          </span>
        </div>

        <Tag :value="tx.type" :severity="tx.transactionError !== null ? 'info' : 'success'" class="mr-3" />

        <Button v-tooltip.top="'Click to copy full signature'"
          :label="tx.signature.slice(0, 8) + '...' + tx.signature.slice(-8)" icon="pi pi-copy" link class="font-mono"
          @click="copySignature" />
      </div>
    </template>
  </Card>
</template>
