// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
// 引入一个一个可能要呈现组件
import Home from "@/views/Home.vue";
import News from "@/views/News.vue";
import About from "@/views/About.vue";
import Detail from "@/views/Detail.vue";

// 第二步：创建路由器
const router = createRouter({
  history: createWebHistory(), //路由器的工作模式
  // history: createWebHashHistory(),
  routes: [
    //一个一个的路由规则
    {
      name: "zhuye",
      path: "/home",
      component: Home,
    },
    {
      name: "xinwen",
      path: "/news",
      component: News,
      children: [
        {
          name: "child",
          path: "detail",

          // params参数写法
          // path: "detail/:id/:title/:content?",
          component: Detail,

          /* 
          加上props属性意味着<Detail></Detail> ====> <Detail id='...', title='...', content='...'></Detail>
          而接收Detail中props属性的时候，只需要defineProps(['id','title','content'])就可以直接使用这些属性的值
          这里需要熟练掌握第一种和第二种写法
          */

          // 第一种写法：将路由收到的所有params参数作为props传给路由组件，只针对params参数！！
          // props: true,

          // 第二种写法：函数写法，可以自己决定将什么作为props给路由组件
          props(route) {
            return route.query;
          },

          // 第三种写法：对象写法，可以自己决定将什么作为props给路由组件(用的很少，写死了)
          // props: {
          //   id: 100,
          //   title: 200,
          //   content: 300,
          // },
        },
        {
          path: "/",
          redirect: "/home",
        },
      ],
    },
    {
      name: "guanyu",
      path: "/about",
      component: About,
    },
  ],
});

// 暴露出去router
export default router;
