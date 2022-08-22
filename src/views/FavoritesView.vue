<template>
  <div>
    <NoteList :notes="$store.getters.favoriteNotes" />
  </div>
</template>

<script>
import NoteList from '@/components/NoteList.vue';
export default {
  name: 'FavoritesView',
  components: { NoteList },
};
</script>
