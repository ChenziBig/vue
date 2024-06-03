<template>
    <!--  v-bind:a <==> :a 单向绑定：从script中绑定数据 -->
    <h2 a="1+1" :b="1 + 1" c="x" :d="x">测试</h2>
    <Person a="哈哈" :list="personList"></Person>
</template>

<script lang="ts" setup name="App">
    import Person from './components/Person.vue'
    import { reactive } from 'vue';
    import { type Persons } from '@/types'

    let x = 10;

    let personList = reactive<Persons>([
        { id: 1000, name: '张三', age: 18 },
        { id: 1001, name: '李四', age: 19 },
        { id: 1002, name: '王五', age: 20 }
    ])

</script>