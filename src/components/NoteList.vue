<template>
  <div :key="note.id" v-for="note of notes">
    <NoteListItem :note="note" />
  </div>
</template>

<script>
import NoteListItem from './NoteListItem.vue';
export default {
  name: 'NoteList',
  props: {
    notes: Array,
  },
  components: { NoteListItem },
};
</script>
