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

const imgRegex = /\[img_set\|(?<index>\d+)\]/;

const paragraphs: string[] = props.data.content.split("$&$");

const getImageIndex = (re: RegExpMatchArray | null): number => {
	if (re && re.groups && re.groups.index) {
		return parseInt(re.groups.index) - 1;
	}
	throw "'error when get image index '";
}
</script>

<template>
	<div class="content-wrapper">
		<h2>{{ data.title }}</h2>
		<p>{{ data.creatingDate }}</p>
		<template v-for="(para, index) of paragraphs">
			<template v-if="imgRegex.test(para)">
				<img :src="data.images[getImageIndex(para.match(imgRegex))]" /></template>
			<p v-else>{{ para }}</p>
		</template>
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