<template>
    <!-- v-if 如果为false，结构给你全删了 -->
    <Person v-if="isShow" />
    <!-- v-show 如果为false，结构只是给你隐藏了类似于给你加上了 style="display: none;" -->
    <!-- <Person v-show="isShow" /> -->
</template>

<!-- 类似深度优先遍历 -->

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import {
        ref,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onBeforeUnmount,
        onUnmounted
    } from 'vue'


    let isShow = ref(true)

    // 创建 (setup默认创建好了)
    console.log('父===>setup创建完毕')

    // 生命周期钩子
    onBeforeMount(() => {
        console.log('父===>挂载之前')
    })

    onMounted(() => {
        console.log('父===>挂载完毕')
    })

    onBeforeUpdate(() => {
        console.log('父===>更新之前')
    })

    onUpdated(() => {
        console.log('父===>更新完毕')
    })

    onBeforeUnmount(() => {
        console.log('父===>卸载之前')
    })

    onUnmounted(() => {
        console.log('父===>卸载完毕')
    })
</script>