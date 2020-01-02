import Vue from 'vue'
import Router from 'vue-router'
import auth from '../components/auth'
import admin from '../components/admin'
import etudiant from '../components/etudiant'
import enseignant from '../components/enseignant'
import acceuil from '../components/acceuil'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'acceuil',
      component: acceuil
    },
    {
      path: '/auth',
      name: 'auth',
      component: auth
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/enseignant',
      name: 'enseignant',
      component: enseignant
    },
    {
      path: '/etudiant',
      name: 'etudiant',
      component: etudiant
    },
    

  ]
})
