<template>
    <div class="person">
        <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">点我+1</button>
    </div>
</template>
<!-- watch函数里的参数是sum而不是sum.value 是因为watch只能监视以下四种数据：
 1.ref定义的数据(这里ref定义的数据是sum，而不是sum.value属性)
 2.reactive定义的数据
 3.函数返回的一个值( getter函数 )
 4.一个包含上述内容的数组 -->
<script lang="ts" setup name="Person">
    import { ref, watch } from 'vue';

    let sum = ref(0);

    // 方法
    function changeSum() {
        sum.value++;
    }

    // 监视，情况一：监视【ref】定义的【基本类型】数据
    const stopWatch = watch(sum, (newValue, oldValue) => {
        console.log('sum变化了' + newValue, oldValue);
        if (newValue > 10) {
            stopWatch();
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