<template>
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点我sum+1</button>
    </div>
</template>
<script>
    export default {
        name: 'Person',
        data() {
            return {
                sum: 0
            }
        },
        methods: {
            add() {
                this.sum++
            }
        },
        // 创建前的钩子
        beforeCreate() {
            console.log("创建前");
        },
        // 创建完毕的钩子
        created() {
            console.log("创建后");
        },
        // 挂载前的钩子
        beforeMount() {
            console.log("挂载前");
            // debugger;
        },
        // 挂载完毕的钩子
        mounted() {
            console.log("挂载完毕");
        },
        // 更新前的钩子
        beforeUpdate() {
            console.log("更新前");
        },
        // 更新完毕的钩子
        updated() {
            console.log("更新完毕");
        },
        // 销毁前的钩子 在App里设置v-if=true，然后在页面的Vue组件里设置v-if=false，可以看到被销毁了
        beforeDestroy() {
            console.log("销毁前");
        },
        // 销毁完毕的钩子
        destroyed() {
            console.log("销毁完毕");
        }
    }
</script>
<style scope>
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