<template>
  <div :class="showSidebar ? 'sidebar-expand' : 'sidebar'"></div>
</template>
<script>
export default {
  name: "SideBar",
  props: {
    showSidebar: Boolean,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style>
.sidebar {
  position: fixed;

  width: 3rem;
  z-index: 1;
  height: 100vh;
  border: 1px solid #c0c0c0;
}
.sidebar-expand {
  position: fixed;
  background-color: white;
  width: 20rem;
  z-index: 1;
  height: 100vh;
  border: 1px solid #c0c0c0;
}
</style>
