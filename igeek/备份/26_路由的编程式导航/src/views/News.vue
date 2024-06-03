<template>
    <div class="news">
        <!-- 导航栏区 -->
        <ul>
            <li v-for="view in newsList" :key="view.id">
                <button @click="showMessage(view)">展示信息</button>
                <RouterLink :to="{
                    name: 'child',
                    query: {
                        id: view.id,
                        title: view.title,
                        content: view.content,
                    }
                }
                    ">
                    {{ view.title }}
                </RouterLink>
            </li>
        </ul>
        <!-- 展示区 -->
        <div class="news-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts" name="News">
    import { reactive } from 'vue';
    import { RouterLink, RouterView, useRouter } from 'vue-router';
    import { type queryImpl } from '@/types';

    const router = useRouter()

    let newsList = reactive([
        { id: 'asfdtrfay01', title: '很好的抗癌食物', content: '西蓝花' },
        { id: 'asfdtrfay02', title: '如何一夜暴富', content: '学IT' },
        { id: 'asfdtrfay03', title: '震惊，万万没想到', content: '明天是周一' },
        { id: 'asfdtrfay04', title: '好消息！好消息！', content: '快过年了' }
    ])

    // 因为RouterLink经过转化为html变成了a链接跳转
    // 这个案例让我们能实现点击按钮实现链接跳转
    // 路由器实现跳转,RouterLink里面的to怎么写这里的push函数里面就怎么写
    function showMessage(view: queryImpl) {
        router.push(
            {
                name: 'child',
                query: {
                    id: view.id,
                    title: view.title,
                    content: view.content
                }
            }
        )
    }

</script>

<style scoped>

    /* 新闻 */
    .news {
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        height: 100%;
    }

    .news ul {
        margin-top: 30px;
        /* list-style: none; */
        padding-left: 10px;
    }

    .news ul::marker {
        color: #64967E;
    }

    .news li>a {
        font-size: 18px;
        line-height: 40px;
        text-decoration: none;
        color: #64967E;
        text-shadow: 0 0 1px rgb(0, 84, 0);
    }

    .news-content {
        width: 70%;
        height: 90%;
        border: 1px solid;
        margin-top: 20px;
        border-radius: 10px;
    }
</style>