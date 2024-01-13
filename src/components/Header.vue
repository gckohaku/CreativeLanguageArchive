<script setup lang="ts">
// script here
</script>

<template>
	<div class="header-wrapper">
		<div class="header-container"></div>
	</div>
</template>

<style scoped lang="scss">
.header-wrapper {
	width: 100%;
	height: 60px;
	background-color: green;

	.header-container {
		margin-inline: auto;
		width: var(--commonContentWidth);
		height: 100%;
		background-color: cyan;
	}
}
</style>