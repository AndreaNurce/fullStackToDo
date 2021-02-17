<template>

<div class="form">
      <ul class="tab-group">
        <router-link to="/signUp"
         class="tab active"  
         tag="li" exact> 
         <a >Sign Up</a>
         </router-link>

        <router-link to="/logIn" 
        class="tab "
          tag="li"
           exact> <a >Log In</a>
           </router-link>
      </ul>
      
      <div class="tab-content">
        <div id="signup">   
          <h1>Sign Up for Free</h1>
          <form >
          
          <div class="field-wrap">
            <input type="email"
             v-model="email"
             placeholder="Email Address" 
             required 
             autocomplete="off"/>
          </div>

          <div class="field-wrap">
            <input v-model="number" type="text" 
            placeholder="Phone number" 
            required autocomplete="off"/>
          </div>
          
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
          <div  style="text-align:center;" @click="signUp()" type="submit" 
          class="button button-block">Get Started</div>
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
      email :'',
      number : '',
      password : '',
      confirmPassword : '',
      error : ''
      
    }
  },methods: {

       signUp : async function(){

      if(this.password != this.confirmPassword){
            this.error = "Passwords do not match"
         }else if(this.password == ''||this.email == ''||this.number == ''){
            this.error = "Fields can not be empty"
         }else{
           this.error = null;
           await axios.post('https://back-en-to-do.herokuapp.com/signUp', {
                  email: this.email,
                  password: this.password,
                  phoneNumber: this.number
              }).then(this.$router.push('/logIn'))
         }
      }
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
  color: #1ab188;
  transition: 0.5s ease;
}
a:hover {
  color: #179b77;
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
  background: #179b77;
  color: #ffffff;
}
.tab-group .active a {
  background: #1ab188;
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
  color: #1ab188;
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
  border-color: #1ab188;
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
  background: #1ab188;
  color: #ffffff;
  transition: all 0.5s ease;
  -webkit-appearance: none;
}
.button:hover, .button:focus {
  background: #179b77;
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