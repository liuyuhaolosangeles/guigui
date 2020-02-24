

// export default {
//     path: '/admin',
//     component: ()=> import('../../views/Mine.vue'),
//         children : [
//         {
//             path:'center',
//             component : ()=> import('../../views/center.vue')
//         }
//     ]

// }

export default {
    path: '/admin',
    component: ()=> import('../../views/Admin.vue'),
}