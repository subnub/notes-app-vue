<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/create-note">Create Note</router-link> |
    <router-link to="/favorite-notes">Favorite Notes</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  created() {
    this.$store.dispatch('loadSavedNotes');
  },
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: blue;
}
</style>
