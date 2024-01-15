<script setup lang="ts">
import { onBeforeMount } from 'vue';

import type { ContentUnit } from '@/common/ContentUnit';
import pushContentData from "@/page-contents";
import TagsArea from './TagsArea.vue';

export interface Props {
	data?: ContentUnit;
}

const props = withDefaults(defineProps<Props>(), {
	data: (props: Props): ContentUnit => {
		return {
			id: "404_not_found",
			title: "404 Not Found",
			creatingDate: "XXXX/XX/XX",
			images: [],
			content: "お探しのページは見つかりませんでした。$n$リンクが正しいかを確認してください。",
			tags: ["404"],
		}
	}
});

const imgRegex = /\[img_set\|(?<index>\d+)(\|(?<caption>.+)|)\]+/;

const paragraphs: string[] = props.data.content.replace("\n", "").split("$&$");

const getImageIndex = (re: RegExpMatchArray | null): number => {
	if (re && re.groups && re.groups.index) {
		return parseInt(re.groups.index) - 1;
	}

	throw "'error when get image index '";
}

const generateCaption = (re: RegExpMatchArray | null): string => {
	if (re && re.groups && re.groups.caption) {
		return re.groups.caption.replace("$n$", "<br>");
	}
	throw "'error when get image index '";

	throw "no image tag data";
}
</script>

<template>
	<div class="content-wrapper">
		<h2>{{ data.title }}</h2>
		<p>{{ data.creatingDate }}</p>
		<template v-for="(para, index) of paragraphs">
			<figure class="content-image-container" v-if="imgRegex.test(para)">
				<img class="content-image" :src="data.images[getImageIndex(para.match(imgRegex))]" />
				<figcaption v-if="para.match(imgRegex)?.groups?.caption" v-html="generateCaption(para.match(imgRegex))"></figcaption>
			</figure>
			<p v-else v-html="para.replace('$n$', '<br>')"></p>
		</template>
	</div>
	<div class="tags">
		<TagsArea :tags="data.tags" />
	</div>
</template>

<style scoped lang="scss">
.content-wrapper {
	width: 100%;

	.content-image-container {
		text-align: center;

		.content-image {
			max-width: 95%;
		}
	}

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