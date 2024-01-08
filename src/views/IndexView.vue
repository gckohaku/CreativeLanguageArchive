<script setup lang="ts">
import { RouterLink } from 'vue-router';
import GcDetails from '@/components/modules/GcDetails.vue';

import pushContentData from "@/page-contents/index"
import { onBeforeMount, onMounted } from 'vue';
import { contentData } from '@/common/contentData';
import ContentInfoCard from '@/components/ContentInfoCard.vue';
import ContentList from '@/components/ContentList.vue';

onBeforeMount(() => {
	contentData.splice(0);

	for (const pushContent of pushContentData) {
		pushContent();
	}
});
</script>

<template>
	<div>
		<ContentList :contents="contentData"></ContentList>
	</div>
</template>

<style scoped></style>