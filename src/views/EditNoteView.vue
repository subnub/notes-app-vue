<template>
  <div>edit note</div>
  <EdittableNote
    v-show="!this.error"
    @submit-note="editNote"
    :initialTitle="initialTitle"
    :initialBody="initialBody"
  />
  <h3 v-show="this.error">Error Note Not Found.</h3>
</template>

<script>
import EdittableNote from '@/components/EdittableNote.vue';
export default {
  name: 'EditNoteView',
  data() {
    return {
      initialTitle: '',
      initialBody: '',
      note: null,
      error: false,
    };
  },
  created() {
    /**
     * Since users can use a URL with the id of the note to
     * View/Edit it we check if the note exists, if it does
     * Not we dispaly a simple error message.
     */
    const noteId = this.$route.params.id;
    const note = this.$store.state.notes.find((note) => note.id === noteId);
    if (note) {
      this.initialTitle = note.title;
      this.initialBody = note.body;
      this.note = note;
      this.error = false;
    } else {
      this.error = true;
    }
  },
  methods: {
    editNote(data) {
      this.$store.dispatch('editNote', { ...this.note, ...data });
      this.$router.push('/');
    },
  },
  components: { EdittableNote },
};
</script>
