<template>
    <div class="person">
        <h1 ref="title1">javaWeb</h1>
        <h2 ref="title2">前端</h2>
        <h3 ref="title3">Vue</h3>
        <input type="text" ref="inpt"> <br><br>
        <button @click="showLog">点我打印内容</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref } from 'vue'

    let title1 = ref()
    let title2 = ref()
    let title3 = ref()

    function showLog() {
        // 通过id获取元素
        const t1 = document.getElementById('title1')
        // 打印内容
        console.log((t1 as HTMLElement).innerText)
        console.log((<HTMLElement>t1).innerText)
        console.log(t1?.innerText)

        /************************************/

        // 通过ref获取元素
        console.log(title1.value)
        console.log(title2.value)
        console.log(title3.value)
    }
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