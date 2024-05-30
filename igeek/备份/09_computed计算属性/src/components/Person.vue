<template>
    <div class="person">
        姓：<input type="text" v-model="firstName" /><br>
        名：<input type="text" v-model="lastName" /><br>
        <button @click="changeFullName">点击修改全名</button>
        全名：<div>{{ fullName }}</div>
        全名：<div>{{ fullName }}</div>
        全名：<div>{{ fullName }}</div>
        全名：<div>{{ fullName }}</div>
        全名：<div>{{ fullName }}</div>
    </div>
</template>

<script lang="ts" setup name="Person">
    import { ref, computed } from 'vue'

    let firstName = ref('zhang');
    let lastName = ref('san');
    /*
        // 这么定义的fullName是一个计算属性，且是只读的，返回的值而且是响应式的ComputedRefImpl
        let fullName = computed(() => {
            console.log(11);
            return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
        })
    
    
        function changeFullName() {
            console.log(fullName);
            // fullName.value = 'li-si' // operation failed: computed value is readonly
            firstName.value = 'li'
            lastName.value = 'si'
        }
    */

    // 这么定义的fullName是一个计算属性，可读可写
    let fullName = computed({
        get() {
            // 读
            return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value;
        },
        set(val) {
            // 写
            const x = val.split('-')
            const [str1, str2] = x;
            console.log(x);
            firstName.value = str1
            lastName.value = str2
        }
    })

    function changeFullName() {
        // 这一行的代码什么都没有改变，只是引起了set的调用
        fullName.value = 'li-si';
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