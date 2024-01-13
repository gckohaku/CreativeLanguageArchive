import { createRouter, createWebHistory } from 'vue-router';
import IndexView from '@/views/IndexView.vue';
import Year2023View from '@/views/Year2023View.vue';
import ContentView from '@/views/ContentView.vue';
import HomeView from '@/views/HomeView.vue';
import ContentList from '@/components/ContentList.vue';
import TagsView from '@/views/TagsView.vue';
import TagContentsView from '@/views/TagContentsView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		else if (to.hash) {
			return {
				el: to.hash,
				behavior: 'smooth',
			};
		}
		else {
			return { top: 0 };
		}
	},
	routes: [
		{
			path: '/',
			name: 'root',
			component: HomeView,
		},
		{
			path: '/home',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/index',
			name: 'index',
			component: HomeView,
		},
		{
			path: '/list',
			name: 'list',
			component: IndexView,
		},
		{
			path: '/tag-list',
			name: 'tagList',
			component: TagsView,
		},
		{
			path: '/tag/:tag',
			name: 'tagContents',
			component: TagContentsView,
		},
		{
			path: '/2023',
			name: '2023',
			component: Year2023View,
		},
		{
			path: '/content/:id',
			name: 'content',
			component: ContentView,
		},
	]
})

export default router
