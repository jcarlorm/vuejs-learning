<template>
    <div class="row">
        <div class="col">
            <div v-html="texto" class="markdown-text"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'markdown',
    props: ['mark'],

    data() {
        return {
            texto: ''
        }
    },
    mounted(){
        this.texto = marked(this.mark, { sanitize: true })
    }
}
</script>

<style>

.markdown-text{
    background-color: #f3f5f6;
    padding: 20px 8px 10px 8px;
    text-align: left;
}
</style>