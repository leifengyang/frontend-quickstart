//1、定义路由表
import Home from "../views/Home.vue";
import Hello from "../views/Hello.vue";
import {createRouter, createWebHashHistory} from 'vue-router'
import User from "../views/user/User.vue";
import UserProfile from "../views/user/UserProfile.vue";
import UserPosts from "../views/user/UserPosts.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/hello', component: Hello},
    {
        path: '/haha/:id/:name/:age', //路径 params 参数
        name: 'Haha',
        component: () => import('../views/Haha.vue')
    },
    {
        path: '/user/:id',
        component: User,
        name: 'User',
        children: [
            {
                //  /user/007/profile
                path: 'profile',
                name: 'Profile',
                component: UserProfile
            },
            {
                //  /user/007/posts
                path: 'posts',
                name: 'Posts',
                component: UserPosts
            }
        ]
    }
]

//2、创建路由器
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes,
});


router.beforeEach(async (to, from) => {
    console.log("to",to)
    console.log("from",from)

    // await fetch();
    // ...
    //1、返回 false：取消导航
    //2、返回true，不返回：继续导航
    //3、返回'路径'：跳转到指定页面
    if(to.path==='/hello'){
        console.log("禁止访问")
        return "/"
    }
})


//3、导出路由器
export default router;

//4、vue实例使用路由器
