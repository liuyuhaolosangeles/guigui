export default {
    
    path: '/mine',

    component: ()=> import('../../views/Mine.vue'),
    children : [
        {
            path:'center',
            component : ()=> import('../../views/Center.vue')
        },
        {
            path:'login',
            component : ()=> import('../../components/Login/Login.vue')
        },
        {
            path:'register',
            component : ()=> import('../../components/Login/Regist.vue')
        },
        {
            path:'findPassword',
            component : ()=> import('../../components/Login/FindPassword.vue')
        },
        {
            path:'/mine',
            redirect:'/mine/login'
        }
    ]
}