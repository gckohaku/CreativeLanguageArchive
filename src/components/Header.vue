<script setup lang="ts">
// script here
</script>

<template>
	<div class="header-wrapper">
		<div class="header-container">
			<nav>
				<RouterLink to="/home">ホーム</RouterLink>
				<RouterLink to="/tag-list">タグ一覧</RouterLink>
			</nav>
		</div>
	</div>
</template>

<style scoped lang="scss">
.header-wrapper {
	width: 100%;
	height: 48px;
	background-color: #f0f8fc;
	display: flex;
	justify-content: center;

	.header-container {
		max-width: var(--commonContentWidth);
		height: 100%;
		display: flex;
		align-content: center;

		nav {
			display: flex;
			width: 100%;
			gap: 1rem;
			align-items: center;
			justify-content: center;

			a {
				color: #4080c0;
			}
		}


	}
}
</style>