<template>
  <header>
    <nav>
      <div class="logo">
        <div class="switch" @click="$emit('toggle-sidebar')">
          <div class="switch-logo-1"></div>
          <div class="switch-logo-2"></div>
        </div>
        <div class="logo-img">
          <router-link class="router-link" to="/">
            <img alt="logo" class="img-logo" src="../assets/logo.png" />
          </router-link>
        </div>
      </div>
      <div class="menu">
        <div class="search-box">
          <button class="btn-search" @click="submit">
            <i class="fas fa-search">search</i>
          </button>
          <input
            type="text"
            class="input-search"
            placeholder="Type to Search..."
            v-model="query"
            @keyup.enter="submit"
          />
        </div>
      </div>
      <div class="cart">
        <ul class="menu-items">
          <li class="menu-item-link">
            <router-link class="router-link" to="/login">Login</router-link>
          </li>
          <li class="menu-item-link">
            <router-link class="router-link" to="/signin">Signin</router-link>
          </li>
          <li class="router-link menu-item-link">cart</li>
        </ul>
      </div>
      <div class="empty"></div>
      <div class="burger" @click.prevent="burgerC">
        <div class="burger-1"></div>
        <div class="burger-2"></div>
        <div class="burger-3"></div>
      </div>
      <div :class="side ? 'mobile-menu' : 'hidden'">
        <div class="router-link" @click.prevent="burgerC">==D</div>
        <div>
          <router-link class="router-link" to="/login">Login</router-link>
        </div>
        <div>
          <router-link class="router-link" to="/signin">Signin</router-link>
        </div>
        <div>
          <router-link class="router-link menu-item-link" to="/"
            >cart</router-link
          >
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "NavBar",
  props: {
    showSidebar: Boolean,
  },
  emits: ["toggle-sidebar"],
  data() {
    return {
      query: "",
      side: false,
    };
  },
  methods: {
    submit() {
      console.log(this.query, "hi");
    },
    burgerC() {
      this.side = !this.side;
      console.log(this.side);
    },
  },
  mounted() {
    // console.log("hi");
  },
};
</script>
<style scoped>
nav {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-height: 3rem;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  position: fixed;
  border-bottom: 1px solid #c0c0c0;
  z-index: 2;
}
.mobile-menu {
  height: 100vh;
  margin-right: 0;
  top: 3rem;
  right: 0;
  position: absolute;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  width: 20rem;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: #c0c0c0;

  border: 1px solid #c0c0c0;
  z-index: 3;
}
.hidden {
  display: none;
}
.menu-item-link {
  padding: 0 10px;
  border: #c0c0c0;
  border-right-style: solid;
  border-left-style: solid;
}
.menu-items {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  max-height: 3rem;
}
.img-logo {
  max-width: 100%;
  cursor: pointer;
  object-fit: contain;
  max-height: 3rem;
}
.search-box {
  width: fit-content;
  height: fit-content;
  position: relative;
  max-height: 3rem;
}
.input-search {
  padding: 10px;
  width: 300px;
  max-height: 3rem;
  background: none;
  border: 4px solid #c0c0c0;
  border-radius: 50px;
  box-sizing: border-box;
  font-family: Comic Sans MS;
  font-size: 26px;
  color: #000000;
  outline: none;
  transition: 0.5s;
}
.input-search::placeholder {
  color: rgba(255, 255, 255, 0.5);
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 100;
}
.btn-search {
  width: 50px;
  height: 50px;
  border-style: none;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 0px;
  color: #c0c0c0;
  background-color: transparent;
  pointer-events: painted;
}
.btn-search:focus ~ .input-search {
  width: 400px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
}
.input-search:focus {
  width: 400px;
  border-radius: 0px;
  background-color: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 500ms cubic-bezier(0, 0.11, 0.35, 2);
}
.router-link {
  text-decoration: none;
  color: #c0c0c0;
  cursor: pointer;
}
.burger,
.empty {
  display: none;
  margin-left: auto;
  margin-right: 40px;
}
.burger-1,
.burger-3 {
  width: 50px;
  border-radius: 50%;
  height: 2px;
  margin-bottom: 5px;
  transform: rotate(0deg);
  background-color: #c0c0c0;
}
.burger-2 {
  width: 40px;
  border-radius: 20%;
  height: 2px;
  margin: 5px;
  transform: rotate(0deg);
  /* background-color: #fff; */
  border: 6px double #c0c0c0;
}
.logo {
  display: flex;
  flex-direction: row;
}
.switch {
  width: 3rem;
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  object-fit: contain;
  height: 3rem;
  border-right: 1px solid #c0c0c0;
}
.switch-logo-1 {
  padding: 0;
  margin: 0;
  width: 25px;
  height: 2px;
  background-color: #c0c0c0;
  /* transform: rotate(45deg); */
  transform: rotate(45deg);
}
.switch-logo-2 {
  padding: 0;
  margin-left: -5px;
  width: 25px;
  height: 2px;
  background-color: #c0c0c0;
  transform: rotate(-45deg);
}
@media (max-width: 980px) {
  .menu {
    display: none;
  }
  .cart {
    display: none;
  }
  .burger,
  .empty {
    display: block;
    cursor: pointer;
  }
}
</style>
