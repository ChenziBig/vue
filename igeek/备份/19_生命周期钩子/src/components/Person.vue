<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">点我sum+1</button>
    </div>
</template>

<!-- vue3写法 -->
<script lang="ts" setup name="Person">
    import {
        ref,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onBeforeUnmount,
        onUnmounted
    } from 'vue'

    // 数据
    let sum = ref(0)
    // 方法
    function changeSum() {
        sum.value += 1
    }

    // 创建 (setup默认创建好了)
    console.log('子===>setup创建完毕')


    // 生命周期钩子
    onBeforeMount(() => {
        console.log('子===>挂载之前')
    })

    onMounted(() => {
        console.log('子===>挂载完毕')
    })

    onBeforeUpdate(() => {
        console.log('子===>更新之前')
    })

    onUpdated(() => {
        console.log('子===>更新完毕')
    })

    onBeforeUnmount(() => {
        console.log('子===>卸载之前')
    })

    onUnmounted(() => {
        console.log('子===>卸载完毕')
    })
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 10px;
    }

    button {
        margin-left: 5px;
    }
</style>