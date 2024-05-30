<template>
    <div class="person">
        <h1>情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改第一台车</button>
        <button @click="changeC2">修改第二台车</button>
        <button @click="changeCar">修改整个车</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { reactive, watch } from 'vue'

    // 数据
    let person = reactive({
        name: '张三',
        age: 18,
        car: {
            c1: '奔驰',
            c2: '宝马'
        }
    })
    // 方法
    function changeName() {
        person.name += '~'
    }
    function changeAge() {
        person.age += 1
    }
    function changeC1() {
        person.car.c1 = '奥迪'
    }
    function changeC2() {
        person.car.c2 = '大众'
    }
    function changeCar() {
        person.car = { c1: '雅迪', c2: '爱玛' }
    }

    // 监视，情况四：监视响应式对象中的某个属性(下面这个函数只监视person.name这个属性)，且该属性是基本类型的，要写成函数式
    // ()=>person.name  <==等价于==>  ()=>{return person.name}  ===>此时这个就是一个getter函数，如果是普通的直接写person.name会直接报错
    watch(() => person.name, (newValue, oldValue) => {
        console.log('person.name变化了', newValue, oldValue)
    })

    // 监视，情况四：监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也能写函数，更推荐写函数
    // 如果直接写，car中的属性变化可以监听到，但是整体变化不能监听到
    // 如果写函数，car中的属性变化监听不到了，但是整体变化可以监听到(监视的是地址值)
    // 此时，在写函数的基础上，car中的属性变化和整体变化都可以监听到
    watch(() => person.car, (newValue, oldValue) => {
        console.log('person.car变化了', newValue, oldValue)
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