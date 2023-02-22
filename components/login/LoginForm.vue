<template>
  <div>
    <div class="auth-full-height d-flex flex-row align-items-center">
      <div class="container">
        <div class="row" style="text-align: center">
          <h2>Welcome to Autonomous Meme Content Generator</h2>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <div class="m-2">
                  <div class="text-center mt-3">
                    <h3 class="fw-bolder">Sign In</h3>
                    <p class="text-muted">Sign in your account to continue</p>
                  </div>
                    <form @submit.prevent="userLogin">
                      <div class="form-group mb-3">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-control" v-model="email" placeholder="Enter Email" />
                      </div>
                      <div class="mb-3">
                        <label class="form-label d-flex justify-content-between">
                          <span>Password</span>
                        </label>
                        <div class="form-group input-affix flex-column">
                          <label class="d-none">Password</label>
                          <input type="password" id="pass" class="form-control" v-model="password" placeholder="Enter Password" />
                          <i class="suffix-icon feather cursor-pointer text-dark icon-eye" v-on:click="myFunction()"></i>
                        </div>
                      </div>
                      <button type="submit" class="btn btn-primary w-100">Log In</button>
                    </form>

                  <div class="text-center mt-4">
                    <p class="text-muted">Don't have an account yet? <a href="/signUp">Sign Up</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data(){
    return{
      email:null,
      password:null,
    }
  },
  methods:{
    myFunction(){
      let x=document.getElementById('pass');
      if(x.type === 'password'){
        x.type='text'
      }else{
        x.type='password'
      }
    },

    async userLogin(){
      // await this.$auth.loginWith('local',{
      //   headers:{
      //     'x-api-key':'m60lm2BbT8fTHtKQQQ1bKqvbQ2BackdDtlAiCts0eK2ddQ0KTOY5jIcwOJViPSVrnuL4ReJ2T3YiLEDAOBKLwQqhPLV4Zwj9DvW7RvdNXI5nQPURNltCjX7apVWni59d'
      //   },
      //   data:{
      //     email_address:this.email,
      //     password:this.password
      //   }
      // }).then((res)=>{
      //   console.log('auth response',res)
      //   this.$router.push('/')
      // }).catch((err)=>{
      //   console.log('auth error',err)
      // })
      await this.$axios.$post('/login',{'email_address':this.email,'password':this.password},{
        headers:{
          'x-api-key':'m60lm2BbT8fTHtKQQQ1bKqvbQ2BackdDtlAiCts0eK2ddQ0KTOY5jIcwOJViPSVrnuL4ReJ2T3YiLEDAOBKLwQqhPLV4Zwj9DvW7RvdNXI5nQPURNltCjX7apVWni59d'
        }
      }).then((res)=>{
        localStorage.setItem('token',res.token)
        localStorage.setItem('user',JSON.stringify(res.Customer))
        this.$router.push('/')

        console.log('res',res)
        console.log('local',JSON.parse(localStorage.getItem('user')))
      }).catch((err)=>{
        console.log('err',err)
      })
    }
  }
}
</script>

<style scoped>

</style>
