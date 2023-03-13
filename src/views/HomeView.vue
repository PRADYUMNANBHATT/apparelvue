<template>
  <Nav @toggle-sidebar="toggle" />
  <Sidebar :show-sidebar="showSidebar" />
  <section class="section-1">
    <div class="left">
      <h1>Breakfast To-Go</h1>
      <p>
        No time to linger? That's fine. We've packed you a breakfast fit for
        kings. Emphasis on "fit."
      </p>
      <strong>Check out the ingredients:</strong>

      <ul>
        <li>Slow-roasted oats & grains Vine-ripened</li>
        <li>grapes & berries</li>
        <li>Naturally sweetened dried fruit</li>
        <li>Homemade yogurt</li>
        <li>Freshly harvested honey</li>
      </ul>
    </div>
    <div class="right">
      <img src="../assets/sect_1.png" alt="" />
    </div>
  </section>
  <section class="section-2">
    <div class="left-2">
      <img src="../assets/sect_2.png" alt="" />
    </div>
    <div class="right-2">
      <h1>Breakfast To-Go</h1>
      <p>
        No time to linger? That's fine. We've packed you a breakfast fit for
        kings. Emphasis on "fit."
      </p>
      <strong>Check out the ingredients:</strong>

      <ul>
        <li>Slow-roasted oats & grains Vine-ripened</li>
        <li>grapes & berries</li>
        <li>Naturally sweetened dried fruit</li>
        <li>Homemade yogurt</li>
        <li>Freshly harvested honey</li>
      </ul>
    </div>
  </section>
  <section class="section-3">
    <div class="grid-3-col">
      <div class="prd-1"></div>
      <div class="prd-1"></div>
      <div class="prd-1"></div>
    </div>
  </section>
  <Footer />
</template>

<script>
// @ is an alias to /src

import Nav from "@/components/NavBar.vue";
import Sidebar from "@/components/Sidebar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Nav,
    Sidebar,
    Footer,
  },
  emits: [""],
  computed: {},
  data() {
    return {
      showSidebar: false,
    };
  },
  methods: {
    toggle() {
      console.log(this.showSidebar);
      this.showSidebar = !this.showSidebar;
    },
  },
};
</script>
<style scoped>
.section-1 {
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: url("../assets/wave-border-png-1.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  border-bottom: 1px solid #c0c0c0;
}
.left {
  /* background-color: #210d0d; */
  display: flex;
  flex-direction: column;
  margin: 3rem;
  padding: 3rem;
  align-items: flex-start;
  justify-content: center;
  text-align: justify;
}
.left ul {
  padding-left: 20px;
}
.right {
  display: block;
}
.section-2 {
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* background: url("../assets/wave-border-png-1.png"); */
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  border-bottom: 1px solid #c0c0c0;
}
.right-2 {
  background: url("../assets/shape-white.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;

  filter: drop-shadow(16px 16px 20px grey);

  /* color: white; */
  display: flex;
  flex-direction: column;
  margin: 3rem;
  padding: 3rem;
  align-items: flex-start;
  justify-content: center;
  text-align: justify;
}
.left-2 {
  width: 400px;
}
.section-3 {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url("../assets/wave-border-png-1.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  border-bottom: 1px solid #c0c0c0;
}
.prd-1 {
  width: 30vw;
  height: 400px;
  border: 1px solid #c0c0c0;
  margin: 1px;
  background: url("../assets/wave-border-png-1.png");
  background-repeat: no-repeat;
  background-position: right;
  background-size: cover;
}
.prd-1:hover {
  box-shadow: 1px 5px 5px 5px #c0c0c0;
}
h1 {
  font-size: 50px;
}
@media (max-width: 980px) {
  .right {
    display: none;
  }
  .section-1,
  .section-2 {
    background-size: cover;
    display: flex;
  }
  .left-2 {
    display: none;
  }
}
</style>
