<template>
  <form class="wrapper" @submit="submit">
    <div class="items">
      <input class="input" v-model="title" placeholder="title" />
      <input class="input" v-model="body" placeholder="body" />
      <input class="submit-button" type="submit" />
    </div>
  </form>
</template>

<script>
export default {
  name: 'EdittableNote',
  data() {
    return {
      title: this.initialTitle,
      body: this.initialBody,
    };
  },
  props: {
    initialTitle: {
      type: String,
      default: '',
    },
    initialBody: {
      type: String,
      default: '',
    },
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.$emit('submit-note', { title: this.title, body: this.body });
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.items {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input {
  padding: 5px;
  margin: 5px;
  width: 250px;
}
.submit-button {
  padding: 5px;
  border: none;
  border-radius: 6px;
  background: green;
  color: white;
  width: 100px;
  margin-top: 5px;
  cursor: pointer;
}
</style>
