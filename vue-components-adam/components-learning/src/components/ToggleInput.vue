<template>
   <span class="switch switch-sm">
        <input type="checkbox" :value="value" @click="toggle" class="switch" id="switch-sm">
        <label for="switch-sm"><slot></slot></label>
    </span>
</template>

<script>
export default {
    model: {
        event: 'toggle'
    },
    props: ['value'],
    methods: {
        toggle() {
            this.$emit('toggle' , !this.value)
        }
    }
}
</script>
