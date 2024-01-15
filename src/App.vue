<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>
	<Header></Header>

	<div class="router-content">
		<RouterView />
	</div>
</template>

<style scoped>
.router-content {
	max-width: var(--commonContentWidth);
	padding: 2rem;
	box-sizing: border-box;
	width: 100%;
}

:deep(:is(h2, h3, h4, p, figure, ul)) {
	margin-block-end: 1rem;
}
</style>
