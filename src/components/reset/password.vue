<template>

<div class="form">
      <div class="tab-content">
        <div id="resetPass">   
          <h1>Set your new password</h1>
          <form >

          <div class="field-wrap">
            <input v-model="password" type="password" 
            placeholder=" Set A Password" 
            required autocomplete="off"/>
          </div>

          <div class="field-wrap">
            <input  v-model="confirmPassword" type="password"
            placeholder=" Confirm  Password"
            required 
            autocomplete="off"/>
          </div>
              <div style="color : red; text-align:center;" v-if="error" >{{error}}</div>
          <div  style="text-align:center;" @click="resetPass()" type="submit" 
          class="button button-block">Resset password</div>
          </form>
        </div>
    </div>
</div>

  
</template>

<script>
    import axios from 'axios'
export default {

  data() {
    return {
      password : '',
      confirmPassword : '',
      error : ''
      
    }
  },methods: {

       resetPass : async function(){

      if(this.password != this.confirmPassword){
            this.error = "Passwords do not match"
         }else if(this.password == '' || this.confirmPassword == ''){
            this.error = "Fields can not be empty"
         }else{
           this.error = null;
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('recoverToken');
           let res = await axios.put('https://back-en-to-do.herokuapp.com/resertpassword/password', {
                  password: this.password,
                  email: localStorage.getItem('recoverEmail'),
              })
              if( res.data.message ){
                    localStorage.clear();
                    this.$router.push('/logIn');

              }else{
                  this.error = res.data.error
              }
         }
      }
  },destroyed() {
    localStorage.clear();
  },

}
</script>

<style scoped>

*, *:before, *:after {
  box-sizing: border-box;
}
html {
  overflow-y: scroll;
}
body {
  background: #c1bdba;
  font-family: 'Titillium Web', sans-serif;
}
a {
  text-decoration: none;
  color: #5F9EA0;
  transition: 0.5s ease;
}
a:hover {
  color: #3b8588;
}
.form {
  background: rgba(19, 35, 47, 0.9);
  padding: 40px;
  max-width: 600px;
  margin: 40px auto;
  border-radius: 4px;
  box-shadow: 0 4px 10px 4px rgba(19, 35, 47, 0.3);
}
.tab-group {
  list-style: none;
  padding: 0;
  margin: 0 0 40px 0;
}
.tab-group:after {
  content: "";
  display: table;
  clear: both;
}
.tab-group li a {
  display: block;
  text-decoration: none;
  padding: 15px;
  background: rgba(160, 179, 176, 0.25);
  color: #a0b3b0;
  font-size: 20px;
  float: left;
  width: 50%;
  text-align: center;
  cursor: pointer;
  transition: 0.5s ease;
}
.tab-group li a:hover {
  background: #3b8588;
  color: #ffffff;
}
.tab-group .active a {
  background: #5F9EA0;
  color: #ffffff;
}
.tab-content > div:last-child {
  display: block;
}
h1 {
  text-align: center;
  color: #ffffff;
  font-weight: 300;
  margin: 0 0 40px;
}
label {
  position: absolute;
  transform: translateY(6px);
  left: 13px;
  color: rgba(255, 255, 255, 0.5);
  transition: all 0.25s ease;
  pointer-events: none;
  font-size: 22px;
}
label .req {
  margin: 2px;
  color: #5F9EA0;
}
label.active {
  transform: translateY(50px);
  left: 2px;
  font-size: 14px;
}
label.active .req {
  opacity: 0;
}
label.highlight {
  color: #ffffff;
}
input, textarea {
  font-size: 22px;
  display: block;
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  background: none;
  background-image: none;
  border: 1px solid #a0b3b0;
  color: #ffffff;
  border-radius: 0;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}
input:focus, textarea:focus {
  outline: 0;
  border-color: #5F9EA0;
}
textarea {
  border: 2px solid #a0b3b0;
  resize: vertical;
}
.field-wrap {
  position: relative;
  margin-bottom: 40px;
}
.top-row:after {
  content: "";
  display: table;
  clear: both;
}
.top-row > div {
  float: left;
  width: 48%;
  margin-right: 4%;
}
.top-row > div:last-child {
  margin: 0;
}
.button {
  border: 0;
  outline: none;
  border-radius: 0;
  padding: 15px 0;
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  background: #5F9EA0;
  color: #ffffff;
  transition: all 0.5s ease;
  -webkit-appearance: none;
  cursor :pointer;

}
.button:hover, .button:focus {
  background: #3b8588;
}
.button-block {
  display: block;
  width: 100%;
}
.forgot {
  margin-top: -20px;
  text-align: right;
}

</style>