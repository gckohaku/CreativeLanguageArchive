import {contentsData} from "@/common/contentsData";
import {environmentsStore} from "@/stores/environments"

export default () => {
	const store = environmentsStore();
	const imgDir: string = store.contentImageDirectory + "longSentences/2022-12/";

	contentsData.push({
		id: "長文 2022年 12月",
		title: "longSentences_2022_12",
		creatingDate: "2023/02/14 くらい",
		images: [imgDir + "adc_01-1.png"],
		content: "[img_set|1|ここにキャプションを入れる]",
		tags: ["長文", "2023"],
	});
}

