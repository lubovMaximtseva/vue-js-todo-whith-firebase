<template>
  <li
    :class="{
                completed: task.completed,
                editing: editingTask.id === task.id
              }"
    @dblclick="editTask(task.id)"
  >
    <input
      v-if="editingTask.id === task.id"
      :ref="`edit${task.id}`"
      type="text"
      class="edit"
      v-model="editingTask.text"
      @keyup.enter="finishEdit"
      v-on-click-outside="finishEdit"
    />
    <div class="view">
      <input @click="toggleTask(task.id)" type="checkbox" class="toggle" :checked="task.completed" />
      <label>{{ task.text }}</label>
      <button @click="deleteTask(task.id)" class="destroy"></button>
    </div>
  </li>
</template>

<script>
import db from "../firebase";
export default {
  name: "ListItem",
  props: {
    task: {
      type: Object,
      required: true
    },
    toggleTask: {
      type: Function,
      required: false,
      default: () => {}
    },
    deleteTask: {
      type: Function,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      editingTask: {}
    };
  },
  methods: {
    editTask(id) {
      if (this.task.id === id) {
        this.editingTask = this.task;
        this.$nextTick(() => this.$refs[`edit${id}`].focus());
      }
    },
    finishEdit() {
      if (!this.editingTask.text) {
        this.deleteTask(this.editingTask.id);
      } else if (this.editingTask.id) {
        db.collection("tasks")
          .doc(this.editingTask.id)
          .set(this.editingTask)
          .then(() => {});
      }
      this.editingTask = {};
    }
  }
};
</script>