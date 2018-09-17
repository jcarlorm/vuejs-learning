<template>
    <input :value="value" type="text" ref="input" class="form-control">
</template>

<script>

import Pickaday from 'pikaday'

export default {
    name: 'datepicker',
    
    props: {
        value: { required: true },
        format: { default: 'DD-MM-YYYY' },
        options: { default: {} } 
    },

    data() {
        return {
            date: '06-09-2018'
        }
    },

    mounted(){
        const picker =  new Pickaday({
            field: this.$refs.input,
            format: this.format,
            onSelect: () => {
                this.$emit('input', picker.toString() )
            },
            ...this.options
        })
    }

    
}
</script>

