<template>
    <v-snackbar v-model="show">
        {{message}}
        <v-btn text top color="accent" @click.native="show = false">Close</v-btn>
    </v-snackbar>
</template>
<script>
export default {
    data () {
        return {
            show: true,
            message: ''
        }
    } 
}
</script>
<style lang="scss">
    
</style>