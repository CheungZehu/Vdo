<template>
	<div>
		<mu-appbar title="关于">
			<mu-icon-button icon="arrow_back" slot="left" @click="back" />
		</mu-appbar>
		<div class="title">
			<div>微豆 Vdo</div>
			<div class="about-text">一个移动端豆瓣Web应用</div>
		</div>
		<mu-divider />
		<mu-list>
			<mu-sub-header>访问Github</mu-sub-header>
			<mu-paper>
				<a href="https://github.com/CheungZehu" target="_blank">
				<mu-list-item title="Github">
				<mu-icon slot="left" value="link" />
				</mu-list-item>
				</a>
			</mu-paper>
			<mu-sub-header>联系我</mu-sub-header>
			<mu-paper>
				<mu-list-item title="845517336@qq.com">
					<mu-icon slot="left" value="email" />
				</mu-list-item>
				<mu-list-item title="15220036344">
					<mu-icon slot="left" value="call" />
				</mu-list-item>
			</mu-paper>
		</mu-list>
	</div>
</template>

<script>
	export default {
		methods: {
			back() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
	.title{
		color: #474a4f;
		font-size: 48px;
		text-align: center;
		margin: 70px 0;
	}
	.about-text{
		font-size: 16px;
	}
</style>