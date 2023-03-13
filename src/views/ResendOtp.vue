<template>
  <Nav />
  <div class="login">
    <form class="login-box" @submit.prevent="onSubmit">
      <label for="Activation"> Resend OTP</label>
      <input type="text" placeholder="email" v-model="username" required />

      <button>ResendOtp</button>
      <ul class="menu-items">
        <li class="menu-item-link">
          <router-link class="router-link" to="/activate"
            >Verify Email</router-link
          >
        </li>

        <li class="menu-item-link">
          <router-link class="router-link" to="/reset"
            >Reset Password</router-link
          >
        </li>
      </ul>
    </form>
  </div>
  <div></div>
  <div class="notification">
    <div v-for="err in errors" :key="err">
      <h3 class="err" @click="handleMsgClick">{{ err }}</h3>
      <br />
    </div>
    <div v-for="msg in messages" :key="msg">
      <h3 class="msg" @click="handleMsgClick">{{ msg }}</h3>
      <br />
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Nav from "../components/NavBar.vue";
export default {
  name: "ResendOtp",
  props: {},
  emits: [],
  components: {
    Nav,
  },
  data() {
    return {
      username: "",

      errors: [],
      messages: [],
    };
  },
  mounted() {},
  methods: {
    async onSubmit() {
      this.$store.commit("setIsLoading", true);

      const formdata = {
        username: this.username,
      };
      await axios
        .post("resendotp/", formdata)
        .then((response) => {
          let data = response.data;

          this.messages.push(data);
        })
        .catch((error) => {
          this.errors.push(error);
        })
        .finally(() => {
          this.$store.commit("setIsLoading", false);
        });
    },
    handleMsgClick() {
      this.messages = [];
      this.errors = [];
      // this.msgactive = !this.msgactive;
    },
  },
};
</script>
<style scoped>
.login {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0b7285;
}
.login-box {
  width: 400px;
  height: 400px;
  padding: 20px;
  border-radius: 20px;
  background-color: #ffffff5a;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  align-items: center;
  justify-content: center;
}
input {
  border-radius: 20px;
  padding: 10px;
  border: none;
}
button {
  border-radius: 20px;
  padding: 5px 20px;
  border: none;
}
button:hover {
  box-shadow: 1px 2px 3px 2px rgb(255, 255, 255);
  cursor: pointer;
  background-color: #0b7285;
  color: white;
}
.notification {
  position: absolute;
  top: 50%;
  width: 100%;
  padding: 0 10%;
  min-height: 50px;

  align-items: center;
  justify-content: center;
}
.msg {
  cursor: pointer;
  width: 100%;
  padding: 0 10%;
  min-height: 50px;
  color: white;
  background-color: rgba(172, 255, 47, 0.748);
  display: flex;
  align-items: center;
  justify-content: center;
}
.err {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vh;
  padding: 0 10%;
  min-height: 50px;
  color: white;
  background-color: rgba(255, 47, 47, 0.778);
  margin-bottom: 2px;
}
.router-link {
  text-decoration: none;
  color: #ffffff;
  padding: 5px;
}
.menu-items {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
}
</style>
