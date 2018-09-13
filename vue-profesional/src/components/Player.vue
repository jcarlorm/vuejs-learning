<template lang="pug">
	.content(v-if="track")
		p
			img(:src="track.album.images[0].url")
		p.espacio
			strong {{ track.name }}
			small [{{ track.duration_ms | ms-to-mm }}]
		p
			audio(controls , :src="track.preview_url")
</template>

<script>
export default {

	name: 'Player',
	
	data () {
		return {
			track: null
		}
	},

	created () {
		this.$bus.$on('set-track', (track) => {
			this.track = track
		})
	} 
}
</script>

<style lang="scss" scoped>
img{
	width: 124px;
	border-radius: 50%;
}
.espacio {
	margin-bottom: 50px !important
}
</style>
