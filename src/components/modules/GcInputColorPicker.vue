<script setup lang="ts">
export interface Props {
	name?: string;
	id?: string;
	modelValue: string;
};

const props = withDefaults(defineProps<Props>(), {
	name: "",
	id: "",
})

const emit = defineEmits<{
	"update:modelValue": [value: string],
}>();
</script>

<template>
	<div class="color-picker-wrapper">
		<input type="color" class="color-picker" :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)">
		<input type="text" class="color-text" :value="modelValue" @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)">
	</div>
</template>

<style scoped lang="scss">
.color-picker-wrapper {
	display: flex;
	align-items: center;
	gap: 0.5rem;

	.color-picker, .color-text {
		padding: 2px 1px;
	}

	.color-picker {
		border: 2px solid var(--colorPickerBorderColor);
		border-radius: 10px;
		cursor: pointer;

		::-webkit-color-swatch {
			height: 1.5rem;
		}
	}

	.color-text {
		width: 4rem;
		border: 2px solid var(--colorTextBorderColor);
		border-radius: 10px;
		padding: .25rem .1rem;
		outline: none;
		text-align: center;
	}
}
</style>