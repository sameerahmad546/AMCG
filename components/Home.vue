<template>
  <div class="container">
    <div class="row"style="text-align: center" >
      <div class="col-md-6 col-sm-6">
        <div class="form-group mb-3">
          <label class="form-label">Keywords</label>
          <input type="text" class="form-control" v-model="keyword" placeholder="Enter Keywords" />
        </div>
      </div>
      <div class="col-md-2 col-sm-2">
        <button type="submit" class="btn btn-primary w-100"style="margin-top: 4.5vh" v-on:click="paymentBtn=true">Generate</button>
      </div>
<!--      <div class="col-md-2 col-sm-2">-->
<!--        <button type="submit" class="btn btn-primary w-100" style="margin-top: 4.5vh">View History</button>-->
<!--      </div>-->
    </div>
    <div class="container " style="border: #11a1fd solid 1px; border-radius:5px; height: 500px; align-items: center ">
        <div class="row justify-content-center mt-md-5">
          <div v-if="content">
            <img id="img1" :src="'data:image/jpeg;base64,'+images[0]" style="height: 400px;width: 400px">
            <img id="img2" :src="'data:image/jpeg;base64,'+images[1]" alt="yo" style="height: 400px;width: 400px">
          </div>

          <div class="col-md-2 col-sm-2">
            <button type="submit" class="btn btn-primary w-1" v-if="paymentBtn" style="font-size: 16px" v-on:click="payment()">Proceed To Payment</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{
      keyword:null,
      paymentBtn:false,
      content:false,
      images:null

    }
  },
  mounted() {
    if(this.$route.query.success){
      this.$axios.post('/research',{keywords:localStorage.getItem('keywords')},{
        headers:{
          'x-api-key':'m60lm2BbT8fTHtKQQQ1bKqvbQ2BackdDtlAiCts0eK2ddQ0KTOY5jIcwOJViPSVrnuL4ReJ2T3YiLEDAOBKLwQqhPLV4Zwj9DvW7RvdNXI5nQPURNltCjX7apVWni59d',
          'Authorization':'Bearer '+'eyJhbGciOiJIUzI1NiJ9.YWxkZGZmc2lAYWkuY29t.okoe254AaXGOTfXX8jflDfRbXHauZ24r9Vs5vQ53Gmw'
        }
      }).then((res)=>{

        console.log(res)

        this.images=res.data.response
        // this.images[0]=this.images[0].toString('base64')
        // this.images[1]=this.images[1].toString('base64')
        this.content=true
        console.log(this.images)
        // let image1 = document.getElementById('img1')
        // image1.src='data:image/jpeg;base64,' + this.images[0];
        // let image2=document.getElementById('img2')
        // image2.src='data:image/jpeg;base64,' + this.images[1];

      }).catch((err)=>{
        console.log(err)
      })
      // localStorage.removeItem('keywords')
    }
  },
  methods:{
    payment(){
      localStorage.setItem('keywords',this.keyword)
      this.$axios.get('/payment',{headers:{
        'x-api-key':'m60lm2BbT8fTHtKQQQ1bKqvbQ2BackdDtlAiCts0eK2ddQ0KTOY5jIcwOJViPSVrnuL4ReJ2T3YiLEDAOBKLwQqhPLV4Zwj9DvW7RvdNXI5nQPURNltCjX7apVWni59d'
        }}).then((res)=>{
        console.log(res)
        window.location.replace(res.data)
        console.log(localStorage.getItem('keywords'))
      }).catch((err)=>{
        console.log('err',err)
      })
    }
  },
}
</script>

<style scoped>
.btn{
  font-size: 1.5vw;
  padding: 2% 3%;
}
</style>
