<template>
    <div class="person">
        <h2 v-for="person in list" :key="person.id">{{ person.name }}--{{ person.age }}</h2>
    </div>
</template>

<script lang="ts" setup name="Person">
    // defineProps 宏函数可以不需要引用
    import { defineProps } from 'vue';
    import { type Persons } from '@/types'

    // 第一种写法：仅接收 (假设list绑定是一个数字6，那么这个v-for会循环这个次数的空值)
    // const props = defineProps(['list'])

    // 第二种写法：接收 + 限制类型 (假设list绑定的是一个数字6，会报错)
    // defineProps<{ list: Persons }>()

    // 第三种写法：接收 + 限制类型 + 限制必要性 (假设App里的Person没有绑定list这个属性，会报空值，啥也没有了)
    // defineProps<{ list?: Persons }>()

    // 第四种写法：接收 + 限制类型 + 指定默认值 + 限制必要性 + 指定默认值 (如果App里的Person没有绑定list这个属性，list会绑定默认值)
    let props = withDefaults(defineProps<{ list?: Persons }>(), {
        list: () => [{ id: 1000, name: '张三', age: 18 }]
    })
    console.log(props)
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