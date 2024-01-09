<script setup lang="ts">
import { onBeforeMount } from 'vue';

import { contentData } from '@/common/contentData';
import ContentArea from '@/components/ContentArea.vue';
import pushContentData from "@/page-contents";

onBeforeMount(() => {
	contentData.splice(0);

	for (const pushContent of pushContentData) {
		pushContent();
	}
});
</script>

<template>
	<ContentArea :data="contentData[0]" />
</template>

<style scoped lang="scss">
// style here
</style>