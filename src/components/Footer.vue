<template>
  <footer class="footer">
    <div class="footer-row">
      <div class="col-1">
        <div class="logo-img">
          <router-link class="router-link" to="/">
            <img alt="logo" class="img-logo" src="../assets/logo.png" />
          </router-link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            quaerat. Culpa, reiciendis qui quod impedit placeat ea, commodi
            accusamus, optio alias molestias dignissimos. Aspernatur magnam
            odit, voluptas porro amet dolore!
          </p>
        </div>
      </div>
      <div class="col-1">
        <strong>Information</strong>
        <ul class="navigation">
          <li class="nav-link">
            <router-link class="router-link" to="/login">Login</router-link>
          </li>
          <li class="nav-link">
            <router-link class="router-link" to="/signin">Signin</router-link>
          </li>
          <li class="router-link nav-link">cart</li>
        </ul>
      </div>
      <div class="col-1">
        <strong>Navigation</strong>
        <ul class="navigation">
          <li class="nav-link">
            <router-link class="router-link" to="/login">Login</router-link>
          </li>
          <li class="nav-link">
            <router-link class="router-link" to="/signin">Signin</router-link>
          </li>
          <li class="router-link nav-link">cart</li>
        </ul>
      </div>
    </div>
    <div class="footer-row-2">
      <p>copyright&copy;2023 by Pradyumnan Bhatt</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterComponent",
};
</script>
<style scoped>
.footer-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
.footer-row-2 {
  height: 3rem;
  border: 1px solid #c0c0c0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.col-1 {
  height: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid #c0c0c0;
  padding-top: 30px;
  overflow: hidden;
}
.col-1 strong {
  padding-bottom: 30px;
}
.footer-row ul li,
.router-link {
  list-style: none;
  text-decoration: none;
  color: black;
  display: block;
  font-size: 20px;
  padding-top: 0;
  height: 30px;
}
.img-logo {
  max-width: 100%;
  cursor: pointer;
  object-fit: contain;
  max-height: 3rem;
}
.logo-img p {
  margin: 40px 40px 30px 50px;
  text-align: start;
  font-size: 20px;
  line-height: 25px;
  word-spacing: 2px;
}
</style>
