<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { reactive, ref, toRefs } from 'vue'

    let person = reactive({
        name: '张三',
        age: 18
    })


    // 解构赋值
    // 就是person里面的属性都是基本数据类型，用toRefs后，把里面的属性转化为一个新的ref包装的对象，由这个包装对象管理这个属性
    // 返回的是一个指向源对象属性的 ref 引用，任何对该引用的修改都会同步到源对象属性上。 类似于ObjectRefImpl指针指向person里面的属性
    let { name, age } = toRefs(person)
    // 类似于 let { name, age } ={name: ObjectRefImpl, age: ObjectRefImpl}
    console.log(toRefs(person));


    // 方法
    function changeName() {
        name.value += '~'
        console.log(name.value, person.name);
        console.log(name);
        console.log(person.name);

    }
    function changeAge() {
        person.age += 1;
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