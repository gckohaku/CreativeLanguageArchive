<script setup lang="ts">
import { onBeforeMount } from 'vue';

import type { ContentUnit } from '@/common/ContentUnit';
import { contentData } from '@/common/contentData';
import pushContentData from "@/page-contents";

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
	<div class="content-wrapper">
		<h2>{{ data.title }}</h2>
		<p>{{ data.creatingDate }}</p>
		<p>{{ data.content }}</p>
		<div class="tags"><span v-for="tag of data.tags">{{ tag }}</span></div>
	</div>
</template>

<style scoped lang="scss">
.content-wrapper {
	.tags {
		span {
			padding-inline-end: 1rem;

			&::before {
				content: '#';
			}
		}
	}
}
</style>