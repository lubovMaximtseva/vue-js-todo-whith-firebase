<template>
  <ul class="todo-list">
    <ListItem
      :task="task"
      v-for="task in filteredTasks"
      :key="task.id"
      :deleteTask="deleteTask"
      :toggleTask="toggleTask"
    />
  </ul>
</template>

<script>
import db from "../firebase";
import ListItem from "./ListItem";
export default {
  name: "ListItems",
  components: {
    ListItem
  },
  props: {
    filteredTasks: {
      type: Array,
      required: false,
      default: () => {}
    },
    deleteTask: {
      type: Function,
      required: true
    },
    toggleTask: {
      type: Function,
      required: true
    },
    tasks: {
      type: Array,
      required: true
    }
  }
};
</script>
