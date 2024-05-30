<template>
    <!-- html -->
    <Person></Person>
    <Personz></Personz>
</template>

<script lang="ts">
// JS或TS
import Person from './components/Person选项式.vue'
import Personz from './components/Person组合式.vue'

export default {
    name: 'App',
    components: { Person,Personz }
}

</script>

<style>
/*  样式 */
</style>