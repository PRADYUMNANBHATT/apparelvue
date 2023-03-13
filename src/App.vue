<template>
  <router-view />
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      cart: {},
    };
  },
  beforeCreate() {
    this.$store.commit("initializeStore");
    const token = this.$store.state.token;
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Token" + token;
      axios.defaults.headers.common["Content-Type"] = "application/json";
    } else {
      axios.defaults.headers.common["Authorization"] = "";
      axios.defaults.headers.common["Content-Type"] = "";
    }
  },
  mounted() {},
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}

.img-fluid {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}
.grid-2-col {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.grid-3-col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.grid-4-col {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
