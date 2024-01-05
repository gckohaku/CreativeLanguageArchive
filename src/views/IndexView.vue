<script setup lang="ts">
import { RouterLink } from 'vue-router';
import GcDetails from '@/components/modules/GcDetails.vue';
</script>

<template>
	<div>
		<p>みだし</p>
		<GcDetails :open="false">
			<template #summary>せつめい</template>
			<template #details>なかみ</template>
		</GcDetails>
	</div>
</template>

<style scoped></style>