<template>
  <div class="wrapper">
    <h3>{{ note.title }}</h3>
    <p>{{ note.body }}</p>
    <div class="favorite-wrapper">
      <input v-model="favorited" type="checkbox" />
      <p>Favorite</p>
    </div>
    <button @click="editNote" class="button edit-button">Edit</button>
    <button @click="deleteNote" class="button delete-button">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'NoteListItem',
  props: {
    note: Object,
  },
  methods: {
    editNote() {
      this.$router.push(`/edit-note/${this.note.id}`);
    },
    deleteNote() {
      this.$store.dispatch('deleteNote', this.note.id);
    },
  },
  computed: {
    favorited: {
      get() {
        return this.note.favorites;
      },
      set() {
        this.$store.dispatch('favoriteNote', this.note.id);
      },
    },
  },
};
</script>

<style scoped>
.wrapper {
  border: 1px solid black;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 15px;
}
.button {
  padding: 10px;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}
.edit-button {
  background: blue;
  margin-right: 5px;
}
.delete-button {
  background: red;
  margin-left: 5px;
}
.favorite-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
