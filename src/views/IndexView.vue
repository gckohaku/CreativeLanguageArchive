<script setup lang="ts">
import { RouterLink } from 'vue-router';
import GcDetails from '@/components/modules/GcDetails.vue';

import pushContentData from "@/page-contents/index"
import { onBeforeMount, onMounted } from 'vue';
import { contentData } from '@/common/contentData';

onBeforeMount(() => {
	contentData.splice(0);

	for (const pushContent of pushContentData) {
		pushContent();
	}
});
</script>

<template>
	<div>
		<p>みだし</p>
		<GcDetails :open="false">
			<template #summary>せつめい</template>
			<template #details>なかみ</template>
		</GcDetails>
		<template v-for="content of contentData">
			<div v-if="!content.tags.includes('hidden')">
				{{ content }}
			</div>
		</template>
	</div>
</template>

<style scoped></style>