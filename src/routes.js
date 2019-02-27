// Routes
const routes = [
  {
    path: '/home',
    component: () => import('./views/Home/index.vue'),
    name: 'Home',
    meta: {
      title: '首页', keep: true
    }
  },
  {
    path: '/industry',
    component: () => import('./views/Industry/index.vue'),
    name: 'Industry',
    meta: {
      title: '工业总体', keep: true
    }
  },
  {
    path: '/trade',
    component: () => import('./views/Trade/index.vue'),
    name: 'Trade',
    meta: {
      title: '行业总体', keep: true
    }
  },
  {
    path: '/business',
    component: () => import('./views/Business/index.vue'),
    name: 'Business',
    meta: {
      title: '商业总体', keep: true
    }
  }
]

export default routes
