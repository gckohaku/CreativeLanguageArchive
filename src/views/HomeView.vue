<script setup lang="ts">
// script here
</script>

<template>
	<div class="index-container">
	<ul>
		<li>
			<RouterLink to="/list">list</RouterLink>
		</li>
		<li>
			<RouterLink to="/tag-list">tag list</RouterLink>
		</li>
	</ul>
</div>
</template>

<style scoped lang="scss">
.index-container {
	display: flex;
	justify-content: center;
}
</style>