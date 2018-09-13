<template lang="pug">
	.box
		img(src="@/assets/logologin.webp")
		h1.titulo Registro Estacion Platzi
		
		label.input-label Nombre
		input.input-control(type="text" placeholder="Escriba el nombre")

		label.input-label Apellido
		input.input-control(type="text" placeholder="Escriba el Apellido")
		
		label.input-label Cargo
		input.input-control(type="text" placeholder="Escriba el Cargo")
</template>

<script>
export default {
	name: 'login-ejemplo'
}
</script>

<style lang="scss">
.box
{
	max-width: 320px;
	max-height: 409px;
	margin: 0 auto;
	margin-top: 20px;
}

.titulo
{
	font-weight: 900;
	font-size: 23px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 900;
	color: #00bfd6
}

.input-control
{
	width: 100%;
	font-size: 16px;
	padding: 5px 5px 12px 2px;
	outline: 0;
	border-width: 0 0 2px;
	border-color: #ff9300;
}

.input-control:focus
{
	border-color: #d87e00;
}

.input-label
{
	font-size: 12px;
	padding-left: 2px;
	color: #ff9300;
	font-weight: 900
}

</style>
