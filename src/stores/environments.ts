import { defineStore } from "pinia"
import { type Ref, ref } from "vue";

export const environmentsStore = defineStore("environmentsStore", () => {
	const contentImageDirectory: Ref<string> = ref((import.meta.env.PROD ? "/CreativeLanguageArchive/" : "/") + "content-use-images/");

	return { contentImageDirectory };
});