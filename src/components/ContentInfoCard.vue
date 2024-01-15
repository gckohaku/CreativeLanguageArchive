<script setup lang="ts">
import type { ContentUnit } from '@/common/ContentUnit';

export interface Props {
	data?: ContentUnit;
}

const props = withDefaults(defineProps<Props>(), {
	data: (props: Props): ContentUnit => {
		return {
			id: "template",
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
		<RouterLink :to="'/content/' + data.id">{{ data.title }}</RouterLink>
		<p>{{ data.creatingDate }}</p>
		<div class="content-tags">
			<span v-for="tag in data.tags">{{ tag }}</span>
		</div>
	</div>
</template>

<style scoped lang="scss">
.content-card {
	margin-block-end: 1rem;
	border: black 2px solid;

	.content-tags {
		span {
			padding-inline-end: 0.5rem;

			&::before {
				content: '#';
			}
		}
	}
}
</style>