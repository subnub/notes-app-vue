<template>
  <EdittableNote @submit-note="submit" />
</template>

<script>
import { uuid } from 'vue-uuid';
import EdittableNote from '@/components/EdittableNote.vue';
export default {
  name: 'CreateNoteView',
  data() {
    return {
      title: '',
      body: '',
    };
  },
  methods: {
    submit(data) {
      const newNote = {
        id: uuid.v4(),
        title: data.title,
        body: data.body,
        favorites: false,
      };
      this.$store.dispatch('addNote', newNote);
      this.$router.push('/');
    },
  },
  components: { EdittableNote },
};
</script>
