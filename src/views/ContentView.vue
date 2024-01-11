<script setup lang="ts">
import { onBeforeMount } from 'vue';

import { contentsData } from '@/common/contentsData';
import ContentArea from '@/components/ContentArea.vue';
import pushContentData from "@/page-contents";

onBeforeMount(() => {
	contentsData.splice(0);

	for (const pushContent of pushContentData) {
		pushContent();
	}
});
</script>

<template>
	<ContentArea :data="contentsData.find((ctn) => ctn.id === $route.params.id)" />
</template>

<style scoped lang="scss">
// style here
</style>