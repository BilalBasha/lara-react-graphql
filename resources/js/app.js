require('./bootstrap')

// import { InertiaApp } from '@inertiajs/inertia-vue'
// import Vue from 'vue'

// Vue.use(InertiaApp)

// let app = document.getElementById('app')

// new Vue({
//   render: h => h(InertiaApp, {
//     props: {
//       initialPage: JSON.parse(app.dataset.page),
//       resolveComponent: (name) => {
//         return import(`@/Pages/${name}`).then(module => module.default)
//       },
//     },
//   }),
// }).$mount(app)


import { InertiaApp } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'

const app = document.getElementById('app')

render(
  <InertiaApp
    initialPage={JSON.parse(app.dataset.page)}
    resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
  />,
  app
)
