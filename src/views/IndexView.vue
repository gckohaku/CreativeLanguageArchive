<script setup lang="ts">
import pushContentData from "@/page-contents/index"
import { onBeforeMount } from 'vue';
import { contentsData } from '@/common/contentsData';
import ContentList from '@/components/ContentsList.vue';

onBeforeMount(() => {
	contentsData.splice(0);

	for (const pushContent of pushContentData) {
		pushContent();
	}
});
</script>

<template>
	<div>
		<ContentList :contents="contentsData"></ContentList>
	</div>
</template>

<style scoped></style>