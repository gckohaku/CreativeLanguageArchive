<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>
	<Header></Header>

	<div class="router-wrapper">
		<div class="router-content">
			<RouterView />
		</div>
	</div>

	<div class="copyright">©gckohaku 2022-2024 (alpha-8)</div>
</template>

<style scoped>
.router-wrapper {
	display: flex;
	justify-content: center;

	.router-content {
	max-width: var(--commonContentWidth);
	padding: 2rem;
	box-sizing: border-box;
	width: 100%;
}}

.copyright {
	position: fixed;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.3);
	padding: 0.1rem 0.2rem;
}

:deep(:is(h2, h3, h4, p, figure, ul)) {
	margin-block-end: 1rem;
}
</style>
