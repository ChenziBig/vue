<template>
    <h2 class="title">Vue测试Header</h2>
</template>
<script lang="ts" setup name="Header">

</script>
<style>

    /* 标题样式，设置居中、间隔和背景效果 */
    /* 标题样式类 */
    .title {
        /* 文本水平居中 */
        text-align: center;
        /* 单词间间距增加 */
        word-spacing: 5px;
        /* 上下 margin 为 30px，创建间距 */
        margin: 30px 0;
        /* 设置标题高度和行高，使其占据固定空间 */
        height: 70px;
        line-height: 70px;
        /* 应用渐变背景色，从灰色到白色 */
        background-image: linear-gradient(45deg, gray, white);
        /* 添加圆角边框 */
        border-radius: 10px;
        /* 添加阴影效果 */
        box-shadow: 0 0 2px;
        /* 设置字体大小 */
        font-size: 30px;
    }
</style>