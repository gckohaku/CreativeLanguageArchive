<script setup lang="ts">
import type { ContentUnit } from '@/common/ContentUnit';

export interface Props {
	data?: ContentUnit;
}

const props = withDefaults(defineProps<Props>(), {
	data: (props: Props): ContentUnit => {
		return {
			title: "タイトル",
			creatingDate: "XXXX/XX/XX",
			images: [],
			content: "記事の内容",
			tags: ["template"],
		}
	}
});
</script>

<template>
	<div class="content-card">
		<p>{{ data.title }}</p>
		<p>{{ data.creatingDate }}</p>
		<p>{{ data.content }}</p>
	</div>
</template>

<style scoped lang="scss">
// style here
</style>