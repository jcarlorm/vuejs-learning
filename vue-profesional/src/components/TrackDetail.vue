<template lang="pug">
div
	pm-header

	pm-loader(v-show="isLoading")
	.container(v-show="!isLoading")
		.columns
			.column.is-3.has-text-centered
				figure.media-left(v-if="track.album")
					p.image
						img( :src="track.album.images[0].url")
					p
						a.button.is-large.is-primary
							span.icon(@click="selectTrack") ⏯
			.column.is-8
				.panel
					.panel-heading
						h1.title {{ trackTitle }}
					.panel-block
						article.media
							.media-content
								.content
									ul(v-for="(v, k) in track")
										li
											strong {{ k }} &nbsp;
											span {{ v }}
							nav.level
								.level-left
									a.level-item
		.columns
			.column
				.content.has-text-centered
					router-link(to="/welcome") Buscar otra cancion
</template>

<script>

import PmHeader from '@/components/layout/Header.vue'
import PmLoader from '@/components/shared/Loader.vue'
import trackMixin from '@/mixins/track'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {

	components: {
		PmHeader,
		PmLoader
	},

	mixins: [ trackMixin ],

	data () {
		return {
			isLoading: true
		}
	},

	computed: {
		...mapState(['track']),
		...mapGetters(['trackTitle'])
	},

	created () {
		const id = this.$route.params.id

		if (!this.track || !this.track.id || this.track.id !== id) {
			this.getTrackById({ id })
				.then(() => {
					this.isLoading = false
				})
		} else {
			this.isLoading = false
		}
	},

	methods: {
		...mapActions(['getTrackById'])
	}
}
</script>

<style lang="scss" scoped>
.columns {
	margin-top: 20px;
}
</style>
