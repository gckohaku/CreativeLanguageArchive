<script setup lang="ts">
import pushContentData from "@/page-contents/index"
import ContentList from '@/components/ContentList.vue';
import { contentsStore } from "@/stores/contents";

const storeContents = contentsStore();
</script>

<template>
	<div class="content-list">
		<ContentList :contents="storeContents.contentsList"></ContentList>
	</div>
</template>

<style scoped>
.content-list {
	width: 100%;
}
</style>