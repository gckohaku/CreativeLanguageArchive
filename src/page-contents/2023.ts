import { contentsData } from "@/common/contentsData";
import { environmentsStore } from "@/stores/environments"

export default () => {
	const store = environmentsStore();
	const imgDir: string = store.contentImageDirectory;

	contentsData.push({
		id: "2023_02_1",
		title: "2023年2月_1",
		creatingDate: "2023/02/14",
		images: [imgDir + "02/2023_02_1.jpg"],
		content: "2023年2月前半のものです。$&$[img_set|1]",
		tags: ["2023"],
	});
	contentsData.push({
		id: "2023_02_2",
		title: "2023年2月_2",
		creatingDate: "2023/11/11",
		images: [imgDir + "02/2023_02_2.png"],
		content: "2023年2月後半のものです。$n$どうして11月に出来上がっているんですか？$&$[img_set|1]",
		tags: ["2023"],
	});
	contentsData.push({
		id: "2023_03_1",
		title: "2023年3月_1",
		creatingDate: "",
		images: [],
		content: "ここに文章を貼り付ける",
		tags: ["2023", "hidden"],
	});
	contentsData.push({
		id: "2023_03_2",
		title: "2023年3月_2",
		creatingDate: "",
		images: [],
		content: "ここに文章を貼り付ける",
		tags: ["2023", "hidden"],
	});
	contentsData.push({
		id: "2023_04_1",
		title: "2023年4月_1",
		creatingDate: "",
		images: [],
		content: "ここに文章を貼り付ける",
		tags: ["2023", "hidden"],
	});
	contentsData.push({
		id: "2023_04_2",
		title: "2023年4月_2",
		creatingDate: "",
		images: [],
		content: "ここに文章を貼り付ける",
		tags: ["2023", "hidden"],
	});
}