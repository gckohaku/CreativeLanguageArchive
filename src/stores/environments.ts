import { defineStore } from "pinia"
import { type Ref, ref } from "vue";

export const environmentsStore = defineStore("environmentsStore", () => {
	const contentImageDirectory: Ref<string> = ref(import.meta.env.BASE_URL + "content-use-images/");

	return { contentImageDirectory };
});