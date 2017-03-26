<template>
	<div id="tab">
		<mu-drawer class='drawer' :open="open" :docked="docked" @close="toggle()">
			<div class="drawer-pic">
				<div class="drawer-title">微豆</div>
				<div class="drawer-description">一个移动端豆瓣Web应用</div>
			</div>
			<mu-list value="movie" @itemClick="docked ? '' : toggle()" @change="page">
				<mu-list-item value="movie" title="电影">
					<mu-icon slot="left" value="movie"/>
				</mu-list-item>
				<mu-list-item value="book" title="图书 - 敬请期待">
					<mu-icon slot='left' value="book" />
        		</mu-list-item>
				<mu-list-item value='music'title="音乐 - 敬请期待">
					<mu-icon slot='left' value='music_note'/>
				</mu-list-item>
				<mu-divider shallowInset/>
				<mu-list-item value='about' title='关于'>
					<mu-icon slot='left' value='info' />
				</mu-list-item>
			</mu-list>
		</mu-drawer>
		<mu-paper :zDepth='2'>
			<mu-appbar title="电影">
				<mu-icon-button icon='menu' slot="left" @click="toggle(true)"/>
				<mu-icon-button icon='search' slot="right" @click="gotoSearch()"/>
			</mu-appbar>
			<mu-tabs :value="activeTab" @change="handleTabChange">
				<mu-tab value="in_theaters" @active="handleActive" title="正在上映" />
				<mu-tab value="coming_soon" @active="handleActive" title="即将上映" />
				<mu-tab value="top250" @active="handleActive" title="Top250" />
			</mu-tabs>
		</mu-paper>
		<div v-if="activeTab === 'in_theaters'">
			<Card tab-name="in_theaters"></Card>
		</div>
		<div v-if="activeTab === 'coming_soon'">
			<Card tab-name="coming_soon"></Card>
		</div>
		<div v-if="activeTab === 'top250'">
		
			<Card tab-name="top250"></Card>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import Card from './Card'
	import * as type from './../../store/movies/type'

	export default {
		data () {
			return {
				open: false,
				docked: true,
				dialog: false,
				value: 'movie'
			}
		},
		//vuex
		computed: mapState({
			activeTab: state => state.movie.tab
		}),
		methods: {
			toggle (flag) {
				this.open = !this.open
				this.docked = !flag
			},
			handleTabChange (val) {
				//vuex
				this.$store.dispatch(type.CHANGE_MOVIES_TAB, val);
				// this.activeTab = val
			},
			handleActive(val) {
				console.log(`--------tab active-------${val}`)
			},
			gotoSearch() {
				this.$router.push({name: 'MovieSearch'})
			},
			page (val) {
				if (val === 'about') {
					this.$router.push({name: 'About'})
				}
			},
			openDia() {
				this.dialog = true;
			},
			closeDia() {
				this.dialog = false;
			}
		},
		components: {
			Card
		}
	}
</script>
	
<style scoped>
	.drawer{
		color: #212121;
		background: #f5f5f5;
	}
	.drawer-pic{
		background-color: #474a4f;
		text-align: center;
		color: #fff;
		padding: 70px 0;
	}
	.drawer-title{
		font-size: 32px;
	}
	.drawer-description{
		font-size: 16px;
		color: #e0e0e0;
	}
</style>