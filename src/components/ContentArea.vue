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
				<div class="content-image-container">
					<img class="content-image" :src="data.images[getImageIndex(para.match(imgRegex))]" />
				</div>
			</template>
			<p v-else v-html="para.replace('$n$', '<br>')"></p>
		</template>
		<div class="tags"><TagsArea :tags="data.tags" /></div>
	</div>
</template>

<style scoped lang="scss">
.content-wrapper {
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