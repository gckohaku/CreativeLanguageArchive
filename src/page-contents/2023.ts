import {contentData} from "@/common/contentData";
import {environmentsStore} from "@/stores/environments"

export default () => {
	const store = environmentsStore();
	const imgDir: string = store.contentImageDirectory;

	contentData.push({
		title: "2023年2月_1",
		creatingDate: "2023/02/14 くらい",
		images: [imgDir + "02/2023_02_1.jpg"],
		content: "[img_set|1]",
		tags: ["test", "2023"],
	});
	contentData.push({
		title: "2023年2月_2",
		creatingDate: "2023/02/27 くらい",
		images: [imgDir + "02/2023_02_2.png"],
		content: "[img_set|1]",
		tags: ["test", "2023"],
	});
	contentData.push({
		title: "2023年3月_1",
		creatingDate: "",
		images: [],
		content: "ここに文章を貼り付ける",
		tags: ["test", "2023", "hidden"],
	});
	contentData.push({
		title: "2023年3月_2",
		creatingDate: "",
		images: [],
		content: "ここに文章を貼り付ける",
		tags: ["test", "2023", "hidden"],
	});
	contentData.push({
		title: "2023年4月_1",
		creatingDate: "",
		images: [],
		content: "ここに文章を貼り付ける",
		tags: ["test", "2023", "hidden"],
	});
	contentData.push({
		title: "2023年4月_2",
		creatingDate: "",
		images: [],
		content: "ここに文章を貼り付ける",
		tags: ["test", "2023", "hidden"],
	});
}

