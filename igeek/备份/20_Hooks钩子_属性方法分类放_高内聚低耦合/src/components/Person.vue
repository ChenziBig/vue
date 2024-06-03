<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}，放大后的倍数为：{{ bigSum }}</h2>
        <button @click="changeSum">点我sum+1</button>
        <hr>
        <img v-for="(dog, index) in dogList" :key="index" :src="dog">
        <button @click="getDog">点我加一张图片</button>
    </div>
</template>
<!-- 钩子命名一般都用`use`开头，这些文件开头设置export default function，然后后面return{...} 返回的是一个对象，最后类似导包就行了 -->
<script lang="ts" setup name="Person">
    import useDog from "@/hooks/useDog";
    import useSum from "@/hooks/useSum";

    // 这里解构赋值
    const { sum, changeSum, bigSum } = useSum()
    const { dogList, getDog } = useDog()
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

    img {
        height: 100px;
        margin: 10px;
    }
</style>