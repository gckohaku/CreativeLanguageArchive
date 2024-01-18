<script setup lang="ts">
import type { ContentUnit } from '@/common/ContentUnit';
import TagsArea from './TagsArea.vue';

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
		<RouterLink class="title-link" :to="'/content/' + data.id">{{ data.title }}</RouterLink>
		<p class="creating-date"><span class="material-symbols-outlined">calendar_month</span>{{ data.creatingDate }}</p>
		<div class="content-tags">
			<TagsArea :tags="data.tags" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.content-card {
	margin-block-end: 1rem;
	border: #2070a0 2px solid;
	border-radius: 10px;
	padding: .5rem;
	background-color: #f0f8ff;

	.title-link {
		font-weight: bold;
		color: #3050a0;
		font-size: 1.25rem;
	}

	.creating-date {
		display: flex;
		justify-content: baseline;
		color: #505050;

		span {
			font-size: 20px;
		}
	}

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