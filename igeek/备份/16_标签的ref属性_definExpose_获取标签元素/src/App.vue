<template>
    <h1 id="title">App.vue_id</h1>
    <h1 ref="title1">App.vue_ref</h1>
    <button @click="showTag">传统id打印内容</button>
    <button @click="showTag1">ref打印内容</button>
    <button @click="showRen">测试</button>
    <Person ref="ren"></Person>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import { ref } from 'vue'

    let title1 = ref()

    let ren = ref()

    function showTag() {
        console.log(document.getElementById('title')); // 传统方式打印
    }

    function showTag1() {
        console.log(title1.value); // 模板方式打印
    }

    // ref 加在组件上，返回的是组件实例,返回的实例数据被保护起来了，只有Person内部指定能给你看什么内容你才能看到，这里延伸到defineExpose
    function showRen() {
        console.log(ren.value); // 组件方式打印
    }
</script>