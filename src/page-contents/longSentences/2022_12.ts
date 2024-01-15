import { contentsData } from "@/common/contentsData";
import { environmentsStore } from "@/stores/environments"

export default () => {
	const store = environmentsStore();
	const imgDir: string = store.contentImageDirectory + "longSentences/2022-12/";

	contentsData.push({
		id: "longSentences_2022_12",
		title: "長文 2022年 12月",
		creatingDate: "2022/12/24",
		images: [imgDir + "adc_01-1.png", imgDir + "adc_01-2.png", imgDir + "adc_02.png", imgDir + "adc_03.png", imgDir + "adc_04.png", imgDir + "adc_05.png", imgDir + "adc_06.png", imgDir + "adc_07.png", imgDir + "adc_08.png", imgDir + "adc_09.png"],
		content: "実は別のところでも公開していたりするのですが、そこでは発音の仕方なんかも公開していたりしています。$n$探してみてね$&$[img_set|1]$&$[img_set|2]$&$[img_set|3]$&$[img_set|4]$&$[img_set|5]$&$[img_set|6]$&$[img_set|7]$&$[img_set|8]$&$[img_set|9]$&$[img_set|10]",
		tags: ["長文", "2022"],
	});
}

