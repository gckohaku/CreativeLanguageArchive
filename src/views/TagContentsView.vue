<script setup lang="ts">
import type { ContentUnit } from '@/common/ContentUnit';
import ContentInfoCard from '@/components/ContentInfoCard.vue';
import { contentsStore } from '@/stores/contents';
import { useRoute } from 'vue-router';

const route = useRoute()

const storeContents = contentsStore();
const contentsData: ContentUnit[] = storeContents.contentsList.filter((el) => el.tags.includes(route.params.tag as string) && !el.tags.includes("hidden"));
</script>

<template>
	<template v-if="contentsData.length === 0">
		ないよ
	</template>
	<template v-else>
		<template v-for="content of contentsData">
			<ContentInfoCard :data="content" />
		</template>
	</template>
</template>

<style scoped lang="scss">
// style here
</style>