<script setup lang="ts">
import { contentsStore } from '@/stores/contents';

const storeContents = contentsStore();

const contentsData = storeContents.contentsList;

let allTags: string[] = [];

for (const content of contentsData) {
	allTags = allTags.concat(content.tags);
}
allTags = allTags.filter((el) => el !== "hidden");

const setTags: Set<string> = new Set(allTags);
</script>

<template>
	<div v-for="tag of setTags" class="tags-container">
		<div class="tag-area">
			<RouterLink :to="'/tag/' + tag">{{ tag }}</RouterLink>
		</div>
	</div>
</template>

<style scoped lang="scss"></style>