<script setup lang="ts">
// script here
</script>

<template>
	<div class="header-wrapper">
		<div class="header-container">
			<RouterLink to="/home">ホーム</RouterLink>
			<RouterLink to="/tag-list">タグ一覧</RouterLink>
		</div>
	</div>
</template>

<style scoped lang="scss">
.header-wrapper {
	width: 100%;
	height: 48px;
	background-color: #ddd;

	.header-container {
		margin-inline: auto;
		width: var(--commonContentWidth);
		height: 100%;
	}
}
</style>