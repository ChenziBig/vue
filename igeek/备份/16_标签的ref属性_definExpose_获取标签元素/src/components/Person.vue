<template>
    <div class="person">
        <h1 id="title">Person.vue_id</h1>
        <h1 ref="title">Person.vue_ref</h1>
        <button @click="showLog">传统id打印内容</button>
        <button @click="showLog1">ref打印内容</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref } from 'vue'

    // 创建一个title的ref，用于存储ref标记的内容，相当于获取页面元素值，取代了id获取，id相当于全局变量
    // 如果使用传统的id获取元素的值，则需要使用document.getElementById()获取，比较麻烦，而且与其他的.vue文件下定义了同一个id，会导致冲突
    let title = ref()

    let a = ref(0)
    let b = ref(1)
    let c = ref(2)

    function showLog() {
        console.log(document.querySelector('#title')) // 传统获取元素，与App.vue有一个相同id的发生了冲突
    }

    function showLog1() {
        console.log(title.value);

    }

    // defineExpose其实就是定义一个对象，然后通过defineExpose暴露出去
    defineExpose({ a, b, c })
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