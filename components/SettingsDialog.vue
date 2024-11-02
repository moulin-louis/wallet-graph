<script setup lang="ts">
const visible = ref<boolean>(false);
</script>

<template>
  <div>
    <Button
      label="Settings"
      severity="help"
      icon="pi pi-cog"
      @click="visible = true"
    />

    <Dialog
      v-model:visible="visible"
      modal
      header="Settings"
      :style="{ width: '25rem' }"
    >
      <SettingsView />
    </Dialog>
  </div>
</template>

