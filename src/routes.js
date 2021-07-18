import Home from './Home/index.js';
import Notes from './Views/Notes/index.js';
import { renderRoutes } from 'react-router-config';

let routeMap = [];

const routes =[
  { path: '/',
    name: '首页',
    exact: true,
    component: Home
  },
  {
    path: '/notes',
    name: '笔记',
    exact: true,
    component: Notes
  }
  // { path: '/note',
  //   exact: true,
  //   component: Anchor,
  //   children: [
  //     { path: '/anchor/home',
  //       exact: true,
  //       component: Home,
  //       children: [
  //         { path: '/anchor/home/anchor',
  //           exact: true,
  //           component: Anchor
  //         }
  //       ]
  //     }
  //   ]
  // }
]

// 子路由处理
const RenderRoutes = (routes) => {
  routes.forEach((route) => {
    if(route.children) {
      RenderRoutes(route.children)
    }
    routeMap.push(route)
  })
  return routeMap
}

export const routesRender = renderRoutes(RenderRoutes(routes))

export default routes;
