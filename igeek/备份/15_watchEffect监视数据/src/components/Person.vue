<template>
    <div class="person">
        <h1>需求：水温达到50℃，或水位达到20cm，则联系服务器</h1>
        <h2 id="demo">水温：{{ temp }}</h2>
        <h2>水位：{{ height }}</h2>
        <button @click="changePrice">水温+1</button>
        <button @click="changeSum">水位+10</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref, watch, watchEffect } from 'vue'
    // 数据
    let temp = ref(0)
    let height = ref(0)

    // 方法
    function changePrice() {
        temp.value += 10
    }
    function changeSum() {
        height.value += 1
    }

    // 监视： --- watch实现
    // 用watch实现，需要明确的指出要监视：temp、height
    // 明确的指定要监视什么
    /*
    watch([temp, height], (value) => {
        // 从value中获取最新的temp值、height值
        const [newTemp, newHeight] = value
        // 室温达到50℃，或水位达到20cm，立刻联系服务器
        if (newTemp >= 50 || newHeight >= 20) {
            console.log('联系服务器')
        }
    })
    */

    // 用watchEffect实现，不用明确指定要监视什么，一上来就会执行一下
    // 无条件的监视在函数内存在的属性
    const stopWtach = watchEffect(() => {
        // 室温达到50℃，或水位达到20cm，立刻联系服务器
        if (temp.value >= 50 || height.value >= 20) {
            console.log(document.getElementById('demo')?.innerText)
            console.log('联系服务器')
        }
        // 水温达到100，或水位达到50，取消监视
        if (temp.value === 100 || height.value === 50) {
            console.log('清理了')
            stopWtach()
        }
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