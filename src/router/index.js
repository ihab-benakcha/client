import Vue from 'vue'
import Router from 'vue-router'
import auth from '../components/auth'
import admin from '../components/admin'
import etudiant from '../components/etudiant'
import enseignant from '../components/enseignant'
import acceuil from '../components/acceuil'
import mot from '../components/mot'
import formation from '../components/formation'
import presentation from '../components/presentation'

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
      path: '/mot',
      name: 'mot',
      component: mot
    },
    {
      path: '/presentation',
      name: 'presentation',
      component: presentation
    },
    {
      path: '/formation',
      name: 'formation',
      component: formation
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
