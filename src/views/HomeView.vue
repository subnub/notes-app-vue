<template>
  <div>
    <NoteList :notes="$store.state.notes" />
  </div>
</template>

<script>
import NoteList from '@/components/NoteList.vue';
export default {
  name: 'HomeView',
  components: { NoteList },
};
</script>
