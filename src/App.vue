<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>
	<Header></Header>

	<RouterView class="router-content" />
</template>

<style scoped>
.router-content {
	max-width: var(--commonContentWidth);
	margin-inline: auto;
}
</style>
