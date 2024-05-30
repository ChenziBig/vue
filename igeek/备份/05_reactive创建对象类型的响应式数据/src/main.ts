// 引入createApp用于创建应用(创建一个花盆)
import { createApp } from "vue";
// 引入App组件(往花盆里插花)
import App from "./App.vue";
// 创建应用(花盆放的位置)
createApp(App).mount("#app");