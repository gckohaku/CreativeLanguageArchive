import { defineStore } from "pinia"
import { type Ref, ref, computed } from "vue";

import type { ContentUnit } from "@/common/ContentUnit";
import { contentsData } from "@/common/contentsData";
import pushContentData from "@/page-contents/index";
import ContentsList from "@/components/ContentList.vue";

export const contentsStore = defineStore("contentsStore", () => {
	contentsData.splice(0);

	for (const category of pushContentData) {
		if (typeof category === "function") {
			category();
		}
		else {
			for (const pushContent of category) {
				pushContent();
			}
		}
	}

	const contentsList: Ref<ContentUnit[]> = ref(contentsData);

	return { contentsList };
});