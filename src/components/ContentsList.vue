<script setup lang="ts">
import type { ContentUnit } from '@/common/ContentUnit';
import ContentInfoCard from './ContentInfoCard.vue';

export interface Props {
	contents: ContentUnit[];
}

const props = defineProps<Props>();
</script>

<template>
	<template v-for="content of contents">
		<ContentInfoCard v-if="!content.tags.includes('hidden')" :data="content" />
	</template>
</template>

<style scoped lang="scss">
// style here
</style>