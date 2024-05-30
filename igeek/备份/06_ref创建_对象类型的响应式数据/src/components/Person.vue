<template>
    <div class="person">
        <p>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</p>
        <input type="text" placeholder="请输入价格">
        <button @click="changePrice">修改价格</button>
        <br>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changeName">修改游戏名</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, ref } from 'vue'

let car = ref({ brand: '大本', price: 100 })

let games = ref([{ id: '01', name: '绝地求生' },
{ id: '02', name: '王者荣耀' },
{ id: '03', name: '英雄联盟' }
])

let obj = reactive({ x: 999 });

console.log(car); // Proxy(object) ref的底层还是 reactive 实现的
console.log(obj); // Proxy(object)


function changePrice() {
    car.value.price += 10
}

function changeName() {
    games.value[0].name = '和平精英'
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