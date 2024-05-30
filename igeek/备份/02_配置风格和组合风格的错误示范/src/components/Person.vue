<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
        <hr>
        <h2>测试：{{ score }}</h2>
        <h2>性别：{{ se }}</h2>
    </div>
</template>

<script lang="ts">
export default {
    name: 'Person',
    // 注意：最好不要出现这种写法，同时存在data(method)和setup
    data() {
        return {
            // data()函数能够读取setup里的数据
            score: 100,
            se: this.sex
        }
    },
    setup() {
        // setup 函数是最早的生命周期
        let name = '张三'
        let age = 18
        let tel = '13888888888'
        let sex = '男'

        // 方法，原来写在methods中
        function changeName() {
            name = 'zhang-san' //注意：此时这么修改name页面是不变化的
        }
        function changeAge() {
            age += 1 //注意：此时这么修改age页面是不变化的
        }
        function showTel() {
            alert(tel)
        }

        // 返回一个对象，对象中的内容，模板中可以直接使用
        return { name, age, tel, sex, changeName, changeAge, showTel }
    }
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