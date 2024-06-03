<template>
    <div id="app">
        <!-- 应用程序主标题 -->
        <Header></Header>
        <!-- 导航栏，用于在不同的路由之间切换 -->
        <div class="navigate">
            <RouterLink to="/home" active-class="active">首页</RouterLink>
            <RouterLink to="/news" active-class="active">新闻</RouterLink>
            <!-- to的三种写法 -->
            <!-- <RouterLink to="/about" active-class="active">关于</RouterLink> -->
            <!-- <router-link :to="{ path: '/about' }" active-class="active">关于</router-link> -->
            <RouterLink :to="{ name: 'guanyu' }" active-class="active">关于</RouterLink>
        </div>
        <!-- 路由视图，用于显示对应路由的组件 -->
        <div class="main-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup name="App">
    import { RouterView, RouterLink } from 'vue-router';
    import Header from './components/Header.vue';
</script>

<style scoped>

    /* 标题样式，设置居中、间隔和背景效果 */
    .title {
        text-align: center;
        word-spacing: 5px;
        margin: 30px 0;
        height: 70px;
        line-height: 70px;
        background-image: linear-gradient(45deg, gray, white);
        border-radius: 10px;
        box-shadow: 0 0 2px;
        font-size: 30px;
    }

    /* 导航栏样式，设置为弹性布局并分配空间 */
    .navigate {
        display: flex;
        justify-content: space-around;
        margin: 0 100px;
    }

    /* 导航链接样式，设置为块级元素并居中、设置背景色和字体样式 */
    .navigate a {
        display: block;
        text-align: center;
        width: 90px;
        height: 40px;
        line-height: 40px;
        border-radius: 10px;
        background-color: gray;
        text-decoration: none;
        color: white;
        font-size: 18px;
        letter-spacing: 5px;
    }

    /* 激活的导航链接样式，改变背景色和字体样式以突出当前页面 */
    .navigate a.active {
        background-color: #64967E;
        color: #ffc268;
        font-weight: 900;
        text-shadow: 0 0 1px black;
        font-family: 微软雅黑;
    }

    /* 主内容区域样式，设置居中、边距、边框和大小 */
    .main-content {
        margin: 0 auto;
        margin-top: 30px;
        border-radius: 10px;
        width: 90%;
        height: 400px;
        border: 1px solid;
    }
</style>