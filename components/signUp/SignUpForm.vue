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
                    <h3 class="fw-bolder">Sign Up</h3>
                    <p class="text-muted">Sign Up your account to continue</p>
                  </div>
                  <form @submit.prevent="register">
                    <div class="form-group mb-3">
                      <label class="form-label">Email</label>
                      <input type="email" class="form-control" v-model="email" placeholder="Enter Email" />
                    </div>
                    <div class="form-group mb-3">
                      <label class="form-label">Username</label>
                      <input type="text" class="form-control" v-model="name" placeholder="Enter Username" />
                    </div>
                    <div class="mb-3">
                      <label class="form-label d-flex justify-content-between">
                        <span>Password</span>
                      </label>
                      <div class="form-group input-affix flex-column">
                        <label class="d-none">Password</label>
                        <input type="password"id="pass" class="form-control" v-model="password" placeholder="Enter Password" />
                        <i class="suffix-icon feather cursor-pointer text-dark icon-eye" v-on:click="myFunction()"></i>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Sign Up</button>
                  </form>

                  <div class="text-center mt-4">
                    <p class="text-muted">Already have a account? <a href="/login">Sign in</a></p>
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
  name: "SignUpForm",
  data(){
    return{
      email:null,
      name:null,
      password:null
    }
  },
  methods:{
    async register(){
      await this.$axios.$post('/register',{'email_address':this.email,'name':this.name,'password':this.password},{
        headers:{
          'x-api-key':'m60lm2BbT8fTHtKQQQ1bKqvbQ2BackdDtlAiCts0eK2ddQ0KTOY5jIcwOJViPSVrnuL4ReJ2T3YiLEDAOBKLwQqhPLV4Zwj9DvW7RvdNXI5nQPURNltCjX7apVWni59d'
        }
      }).then((res)=>{
        this.$router.push('/login')
        console.log('resa',res)
      }).catch((err)=>{
        console.log('err',err)
      })
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

    }
  }
}
</script>

<style scoped>

</style>
