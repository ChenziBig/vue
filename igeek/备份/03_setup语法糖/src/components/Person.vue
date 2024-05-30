<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>
<!-- 注意导入插件import VueSetupExtend from 'vite-plugin-vue-setup-extend' -->
<script lang="ts" setup name="Person123">
    console.log(this); // this === undefined

    // 这里默认 return 出去的变量，方法，属性都可以在模板中使用
    // setup函数中，return出去的变量，方法，属性，都是私有的，只能在setup函数中使用
    let name = "张三";
    let age = 18;
    let tel = '13888888888';
    function changeName() {
        name = 'zhang-san' //注意：此时这么修改name页面是不变化的
    }
    function changeAge() {
        age += 1 //注意：此时这么修改age页面是不变化的
    }
    function showTel() {
        alert(tel)
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