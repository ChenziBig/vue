<template>
    <div class="person">
        <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改对象</button>
    </div>
</template>
<!-- watch函数里的参数是sum而不是sum.value 是因为watch只能监视以下四种数据：
 1.ref定义的数据(这里ref定义的数据是sum，而不是sum.value属性)
 2.reactive定义的数据
 3.函数返回的一个值( getter函数 )
 4.一个包含上述内容的数组 -->
<script lang="ts" setup name="Person">
    import { ref, watch } from 'vue';

    let person = ref({
        name: '张三',
        age: 18
    })

    function changeAge() {
        person.value.name = '李四'
    }

    function changeName() {
        person.value.age = 20
    }

    function changePerson() {
        person.value = {
            name: '王五',
            age: 30
        }
    }

    /*
    监视，情况二：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需手动开启深度监视
    watch的第一个参数是：被监视的数据
    watch的第二个参数是：回调函数
    watch的第三个参数是：配置对象(deep,immediate等等...)
    */
    watch(person, (newValue, oldValue) => {
        console.log('person变化了', newValue, oldValue)
    }, { deep: true })

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