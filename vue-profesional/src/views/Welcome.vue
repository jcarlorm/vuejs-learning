<template lang="pug">

div
	pm-header
	
	transition(name="move")
		pm-notification(v-show="showNotificacion")
			p(slot="body") No se encontraron resultados
	
	transition(name="move")
		pm-loader(v-show="isLoading")
	
	section.section(v-show="!isLoading")
		nav.nav
			.container
				.field.has-addons
					.control.is-expanded
						input.input.is-large(
							type="text" 
							placeholder="Buscar una cancion" 
							v-model="searchQuery"
							@keyup.enter="search"
						)
					.control
						a.button.is-info.is-large( @click="search") Buscar
						a.button.is-danger.is-large &times;
		.container
			p 
				small {{ searchMessage }}
		
		.container
			.columns.is-multiline
				.column.is-one-quarter(v-for="track in tracks")
					pm-track(
						v-blur="track.preview_url"
						:class="{ 'is-active': track.id == selectedTrack }"
						:track="track" 
						@select="setSelectedTrack"
					)

</template>

<script>

import trackService from '@/services/track'
import PmHeader from '@/components/layout/Header.vue'

import PmTrack from '@/components/Track.vue'

import PmNotification from '@/components/shared/Notification.vue'
import PmLoader from '@/components/shared/Loader.vue'

export default {
	name: 'Welcome',
	
	components: {
		PmHeader,
		PmTrack,
		PmLoader,
		PmNotification
	},
	data () {
		return {
			searchQuery: '',
			tracks: [],
			isLoading: false,
			selectedTrack: '',
			showNotificacion: false
		}
	},

	computed: {
		searchMessage () {
			return `Encontrados: ${this.tracks.length}`
		}
	},

	watch: {
		showNotificacion () {
			if (this.showNotificacion) {
				setTimeout(() => {
					this.showNotificacion = false
				}, 3000)
			}
		}
	},

	methods: {
		search () {
			if (this.searchQuery === '') { return }
			this.isLoading = true
			trackService.search(this.searchQuery)
				.then(res => {	
					this.showNotificacion = res.tracks.total === 0				
					this.tracks = res.tracks.items
					this.isLoading = false		
				})
		},

		setSelectedTrack (id) {
			this.selectedTrack = id
		}
	}
}
</script>

<style lang="scss">
.is-active{
	border: 3px solid #31cf65;
}
</style>
