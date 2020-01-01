
<template>
     <form>
            <p class="h4 text-center py-4">Enregistrer</p>


            <label for="nom" class="grey-text font-weight-light">Nom</label>
            <input type="text" id="nom" class="form-control" v-model="etudiant.nom" required>

            <label for="prenom" class="grey-text font-weight-light">Prenom</label>
            <input type="text" id="prenom" class="form-control" v-model="etudiant.prenom" required>

            <label for="date_de_naissance" class="grey-text font-weight-light">date de naissance</label>
            <input type="date" id="date_de_naissance" class="form-control" v-model="etudiant.date_de_naissance" required>

            <label for="lieu_de_naissance" class="grey-text font-weight-light">lieu de naissance</label>
            <input type="text" id="lieu_de_naissance" class="form-control" v-model="etudiant.lieu_de_naissance" required>

            <label for="niveau_scolaire" class="grey-text font-weight-light">niveau scolaire</label>
            <input type="text" id="niveau_scolaire" class="form-control" v-model="etudiant.niveau_scolaire" required>
            
            <label for="num_tel" class="grey-text font-weight-light">num de tel</label>
          <input type="text" id="prenom" class="form-control" v-model="etudiant.num_tel" required>
         
          <label for="email" class="grey-text font-weight-light">email</label>
          <input type="email" id="email" class="form-control" v-model="etudiant.adresse_email" required>

            <label for="password" class="grey-text font-weight-light">Password</label>
            <input type="password" id="password" class="form-control" v-model="etudiant.password" required>

            <label for="module" class="grey-text font-weight-light">module</label>
          <select v-model="etudiant.module" required id="module" class="form-control" >
              <option v-for="mod in modules" :key="mod">{{mod}}</option>
          </select>

            

            
            <div class="text-center py-4 mt-3">
                <button class="btn btn-outline-purple" type="submit">Send<i class="far fa-paper-plane ml-2" @click="enregistrerEtudiant"></i></button>
            </div>
        </form>
</template>
<script>
import axios from 'axios'
export default {
     name: 'form2',
     data(){
         return{
            etudiant:{
            nom: '',
            prenom: '',
            date_de_naissance: '',
            lieu_de_naissance: '',
            niveau_scolaire: '',
            num_tel: '',
            module: '',
            email: '',
            password: '',
            note: 0      
            },
            modules:[]
        }
    },
    methods:{
        getModules:function(){
            axios.get('/module/getModules').then(response=>{                        console.log(response)    
                        self.$set(this, "modules", response.data.modules)    
                    })    
                    .catch((errors) => {    
                        console.log(errors)    
                        router.push("/admin")    
                    })    
          },
        enregistrerEtudiant:function(){
            axios.post('/admin/createEtudiant',this.etudiant).then(response=>{
                console.log(response)
                console.log('l etudiant est ajouter')
            }).catch(errors=>{
                console.log(errors)
                router.push('/admin')
            })
        }
    },
    mounted(){
        this.getModules()
    }
}
</script>