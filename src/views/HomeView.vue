<script setup lang="ts">
// script here
</script>

<template>
	<div class="index-container">
		<ul>
			<li>
				<RouterLink to="/list">リスト</RouterLink>
			</li>
			<li>
				<RouterLink to="/tag-list">タグ一覧</RouterLink>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
.index-container {
	display: flex;
	justify-content: center;
	padding-block-start: 2rem;

	ul {
		height: 100%;
		list-style: none;
		font-size: 2rem;
		font-weight: bold;

		li {
			text-decoration: none;
			position: relative;
			margin-block-end: 1rem;

			&:has(a:hover)::before {
				width: calc(100% + 1rem);
			}

			&::before {
				content: '';
				display: block;
				background-color: #e0f0ff;
				position: absolute;
				z-index: -1;
				left: 0;
				bottom: 0;
				width: 0;
				height: 100%;
				transition: all .3s;
			}

			a {

				text-decoration: none;
				width: 100%;
				display: block;
				padding-inline: .5rem;
				color: #3050a0;

				&::after {
					display: block;
					content: '';
					position: absolute;
					left: 0;
					bottom: 0;
					width: calc(100% + 1rem);
					border-block-end: 2px #3050a0 solid;
				}
			}
		}
	}
}
</style>