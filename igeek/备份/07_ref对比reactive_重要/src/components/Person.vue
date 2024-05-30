<template>
    <div class="person">
        <p>汽车信息：一辆{{ car.brand }}车，价值{{ car.price }}万</p>
        <button @click="changeBrand">修改品牌</button>
        <button @click="changePrice">修改价格</button>
        <button @click="changeCar">修改汽车</button>
        <hr>
        <p>求和：{{ sum }}</p>
        <button @click="changeSum">点我+1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { reactive, ref } from 'vue'

    let car = reactive({ brand: '大本', price: 100 })
    let sum = ref(0);

    function changePrice() {
        car.price += 10
    }
    function changeBrand() {
        car.brand = '小本';
    }

    function changeCar() {
        /* 
        1.当 Car是reactive 类型
        car是引用类型，改变引用地址，不会触发视图更新，就是类似指针的效果
        当 car 的地址改变，其他组件的按钮也就会失效，因为最开始上传的car地址还是原来的
        然而最新的地址还没 return 上去，就跟最开始的(int a ,然后 return a 是一样的，return的只是'a'的值)
        在changeCar给Car赋值了新的地址，所以后面的按钮function争对的car地址不一样，所以不会触发视图更新
        */
        //    car = { brand: 'BMW', price: 1000 } 

        // 下面的这个写法页面可以更新,这个就类似于属性一对一的覆盖一样，但是Car的地址不会改变
        Object.assign(car, { brand: 'BMW', price: 1000 })

        /*
        2. 当 Car是ref 类型
        此时的car是作为 RefImpl 的属性实例化出来的，就好像 return 的是 RefImpl 实例的地址
        所以就算属性变了，也能访问到改变后car的实例
        */
        // car.value = { brand: 'BMW', price: 1000 }
        // console.log(car);

    }


    function changeSum() {
        sum.value += 1
        /*
        下面写法跟上面的结果一样，不行，因为已经不是同一个ref了
        sum=ref(9)
        */
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