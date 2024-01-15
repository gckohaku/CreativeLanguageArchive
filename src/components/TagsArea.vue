<script setup lang="ts">
import Tag from './Tag.vue';

export interface Props {
	tags: string[];
}

const props = withDefaults(defineProps<Props>(), {
	tags: () => ["error"],
});
</script>

<template>
	<div class="tags-area">
		<Tag v-for="tag of tags" :tag="tag" />
	</div>
</template>

<style scoped lang="scss">
.tags-area {
	padding: 0.5rem;
	display: flex;
	flex-direction: row;
	gap: 1rem;
}
</style>