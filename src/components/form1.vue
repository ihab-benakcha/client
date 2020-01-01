
<template>
     

<form>
          <p class="h4 text-center py-4">Enregistrer</p>


          <label for="nom" class="grey-text font-weight-light">Nom</label>
          <input type="text" id="nom" class="form-control" v-model="enseignant.nom" required>

          <label for="prenom" class="grey-text font-weight-light">Prenom</label>
          <input type="text" id="prenom" class="form-control" v-model="enseignant.prenom" required>

          <label for="num_tel" class="grey-text font-weight-light">num de tel</label>
          <input type="text" id="prenom" class="form-control" v-model="enseignant.num_tel" required>
         
          <label for="email" class="grey-text font-weight-light">email</label>
          <input type="email" id="email" class="form-control" v-model="enseignant.adresse_email" required>

          <label for="password" class="grey-text font-weight-light">Password</label>
          <input type="password" id="password" class="form-control" v-model="enseignant.password" required>

            

          <div class="text-center py-4 mt-3">
                <button class="btn btn-outline-purple" type="submit">Send<i class="far fa-paper-plane ml-2" @click="ajouterEnseignant
                "></i></button>
          </div>
     </form>
</template>
<script>
import axios from 'axios'
export default {
     name: 'form1',
     data(){
          return{
          enseignant:{
               nom: '',
               prenom: '',
               num_tel: '',
               email: '',
               password: '' ,
              
          },
          
          }
     },
     methods:{
          
          ajouterEnseignant:function(){
               axios.post('/admin/createEnseignant',this.enseignant).then(response=>{
                    console.log(response)
                    console.log('enseignant est ajouter')
               }).catch(errors=>{
                    console.log(errors)
                    router.push('/admin')
               })
          }
     },
     mounted(){
          
     }
}
</script>