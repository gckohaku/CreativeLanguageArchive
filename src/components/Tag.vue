<script setup lang="ts">
export interface Props {
	tag: string;
}

const props = withDefaults(defineProps<Props>(), {
	tag: "error",
});
</script>

<template>
	<RouterLink class="tag-link" :to="'/tag/' + tag" style="text-decoration: none;">
		<div class="tags-container">
			<span class="tag-mark">#</span><span class="tag-word">{{ props.tag }}</span>
		</div>
	</RouterLink>
</template>

<style scoped lang="scss">
.tag-link {
	.tags-container {
		padding-inline: 5px;
		width: fit-content;
		border: 2px solid #205060;
		border-radius: 5px;
		display: flex;
		align-items: center;
		font-weight: bold;
		background-color: #e8f8fa;
		color: #205060;

		.tag-mark {
			font-size: 1.25rem;
			padding-inline-end: 0.25rem;
		}
	}

	&:hover > .tags-container {
		background-color: #d0f0f4;
	}
}
</style>