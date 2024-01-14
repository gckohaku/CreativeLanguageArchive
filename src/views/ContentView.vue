<script setup lang="ts">
import { onBeforeMount } from 'vue';

import ContentArea from '@/components/ContentArea.vue';
import { contentsStore } from '@/stores/contents';

const storeContents = contentsStore();

const contentsData = storeContents.contentsList;
</script>

<template>
	<ContentArea :data="contentsData.find((ctn) => ctn.id === $route.params.id)" />
</template>

<style scoped lang="scss">
// style here
</style>