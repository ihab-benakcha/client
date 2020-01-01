
<template>
     

<form>

     <label for="email" class="grey-text font-weight-light">email</label>
     <input type="email" id="email" class="form-control" v-model="user.username" required>

     <label for="password" class="grey-text font-weight-light">Password</label>
     <input type="password" id="password" class="form-control" v-model="user.password" required>

          <div class="text-center py-4 mt-3">
               <button class="btn btn-outline-purple" type="submit">Send<i class="far fa-paper-plane ml-2" @click="login" ></i></button>
          </div>
     </form>
</template>
<script>
export default {
     name: 'form0',
     data(){
          return{
               user:{
                    email:'',
                    password: ''
               }
          }
          
          },
          methods:{
               logi
          }
     }
     

</script>