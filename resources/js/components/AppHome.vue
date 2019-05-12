<template>
  <div>
    <toolbar></toolbar>
    <router-view></router-view>
    <appFooter></appFooter>
  </div>
</template>

<script>
import toolbar from "./Toolbar";
import AppFooter from "./AppFooter";
export default {
  components: {
    toolbar: toolbar,
    appFooter: AppFooter
  }
};
</script>

<style>
</style>
