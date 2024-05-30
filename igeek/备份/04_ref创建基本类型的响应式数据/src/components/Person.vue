<template>
    <div class="person">
        <!--  此时引用的name和age是响应式的而且name、age 都是一个对象，默认是name.value，age.value -->
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">年龄+1</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref } from 'vue'
// name 和 age 是响应式的,对应的属性是value，其他有'_'的属性跟我们无关
let name = ref('张三');
let age = ref(18);
let tel = '13888888888';

console.log('name:', name);
console.log('age', age);
console.log('tel', tel);


function changeName() {
    name.value = '李四'
}
function changeAge() {
    age.value += 1
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