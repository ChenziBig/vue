<template>
    <div class="person">
        <h1>组长：</h1>
        <h2>id：{{ person.id }}</h2>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>

        <hr>
        <h1>组员：</h1>
        <ul>
            <li v-for="person in personList">id:{{ person.id }} 姓名:{{ person.name }} 年龄:{{ person.age }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Person">
    // 这里的@符号表示在当前的src目录下 等价于 ../types  (这里因为是在备份文件中，所以就没使用@符号了，而是用../types来代替@/types)
    import { type PersonInterface, type Persons } from '../types';
    let person: PersonInterface = {
        id: 1000,
        name: '张三',
        age: 18
    }

    let personList: Persons = [
        { id: 1001, name: '李四', age: 20 },
        { id: 1002, name: '王五', age: 21 },
        { id: 1003, name: '赵六', age: 22 }
    ]
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