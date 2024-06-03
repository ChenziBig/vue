<template lang="">
  <!-- v-if 如果为false，结构给你全删了 -->
  <!-- <Person v-if="isShow" /> -->
  <!-- v-show 如果为false，结构只是给你隐藏了类似于给你加上了 style="display: none;" -->
  <Person v-show="isShow" />
</template>
<script>
  import Person from './components/Person.vue'
  export default {
    name: 'App',
    components: {
      Person
    },
    data() {
      return {
        isShow: true
      }
    }
  }
</script>
<style lang="">

</style>