<template>
  <footer class="footer" v-show="tasks.length">
    <span class="todo-count">
      <strong>{{ countActiveTasks }}</strong> items left
    </span>
    <ul class="filters">
      <li>
        <router-link to="/all" :class="{ selected: filter === '/all' }">All</router-link>
      </li>
      <li>
        <router-link to="/active" :class="{ selected: filter === '/active' }">Active</router-link>
      </li>
      <li>
        <router-link to="/completed" :class="{ selected: filter === '/completed' }">Completed</router-link>
      </li>
    </ul>
    <button
      class="clear-completed"
      @click="clearCompletedTask"
      v-show="countCompletedTasks"
    >Clear completed</button>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    tasks: {
      type: Array,
      required: true
    },
    deleteTask: {
      type: Function,
      required: true
    },
    countActiveTasks: {
      type: Number,
      required: true
    },
    filter: {
      type: String,
      required: true
    },
    countCompletedTasks: {
      type: Number,
      required: true
    }
  },
  methods: {
    clearCompletedTask() {
      const completedTasksIds = this.tasks
        .filter(task => task.completed)
        .map(task => task.id);
      completedTasksIds.forEach(id => this.deleteTask(id));
    }
  }
};
</script>