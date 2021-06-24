import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _72f7df60 = () => interopDefault(import('../pages/theatre.vue' /* webpackChunkName: "pages/theatre" */))
const _cd405dc2 = () => interopDefault(import('../pages/videos.vue' /* webpackChunkName: "pages/videos" */))
const _482cc462 = () => interopDefault(import('../pages/videos/index.vue' /* webpackChunkName: "pages/videos/index" */))
const _30f7116c = () => interopDefault(import('../pages/videos/_id.vue' /* webpackChunkName: "pages/videos/_id" */))
const _cf2e4366 = () => interopDefault(import('../pages/videos/_id/index.vue' /* webpackChunkName: "pages/videos/_id/index" */))
const _1b707142 = () => interopDefault(import('../pages/videos/_id/edit.vue' /* webpackChunkName: "pages/videos/_id/edit" */))
const _53b2f15b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/theatre",
    component: _72f7df60,
    name: "theatre"
  }, {
    path: "/videos",
    component: _cd405dc2,
    children: [{
      path: "",
      component: _482cc462,
      name: "videos"
    }, {
      path: ":id",
      component: _30f7116c,
      children: [{
        path: "",
        component: _cf2e4366,
        name: "videos-id"
      }, {
        path: "edit",
        component: _1b707142,
        name: "videos-id-edit"
      }]
    }]
  }, {
    path: "/",
    component: _53b2f15b,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
