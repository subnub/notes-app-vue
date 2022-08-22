import { createStore } from 'vuex';

export default createStore({
  state: {
    notes: [],
  },
  getters: {
    favoriteNotes(state) {
      // We add this to getters so it will only run if a dependency changes.
      return state.notes.filter((currentNote) => currentNote.favorites);
    },
  },
  mutations: {
    setNotes(state, notes) {
      state.notes = notes;
    },
    addNote(state, note) {
      state.notes = [note, ...state.notes];
    },
    editNote(state, note) {
      state.notes = state.notes.map((currentNote) => {
        if (currentNote.id === note.id) {
          return note;
        } else {
          return currentNote;
        }
      });
    },
    deleteNote(state, id) {
      state.notes = state.notes.filter((currentNote) => currentNote.id !== id);
    },
    favoriteNote(state, id) {
      state.notes = state.notes.map((currentNote) => {
        if (currentNote.id === id) {
          return { ...currentNote, favorites: !currentNote.favorites };
        } else {
          return currentNote;
        }
      });
    },
  },
  actions: {
    loadSavedNotes({ commit }) {
      const savedNotes = JSON.parse(localStorage.getItem('saved-notes')) || [];
      commit('setNotes', savedNotes);
    },
    addNote({ commit }, note) {
      const savedNotes = JSON.parse(localStorage.getItem('saved-notes')) || [];
      savedNotes.unshift(note);
      localStorage.setItem('saved-notes', JSON.stringify(savedNotes));
      commit('addNote', note);
    },
    editNote({ commit }, note) {
      let savedNotes = JSON.parse(localStorage.getItem('saved-notes')) || [];
      savedNotes = savedNotes.map((currentNote) => {
        if (currentNote.id === note.id) {
          return note;
        } else {
          return currentNote;
        }
      });
      localStorage.setItem('saved-notes', JSON.stringify(savedNotes));

      commit('editNote', note);
    },
    deleteNote({ commit }, id) {
      let savedNotes = JSON.parse(localStorage.getItem('saved-notes')) || [];
      savedNotes = savedNotes.filter((currentNote) => currentNote.id !== id);
      localStorage.setItem('saved-notes', JSON.stringify(savedNotes));
      commit('deleteNote', id);
    },
    favoriteNote({ commit }, id) {
      let savedNotes = JSON.parse(localStorage.getItem('saved-notes')) || [];
      savedNotes = savedNotes.map((currentNote) => {
        if (currentNote.id === id) {
          return { ...currentNote, favorites: !currentNote.favorites };
        } else {
          return currentNote;
        }
      });
      localStorage.setItem('saved-notes', JSON.stringify(savedNotes));
      commit('favoriteNote', id);
    },
  },
  modules: {},
});
