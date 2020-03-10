import {
  decorate,
  observable,
  computed,
  action
} from 'mobx';
 
class TodoStore {
  todos = [];
  get unComputedTodosCount() {
    return this.todos.filter(
      todo => !todo.complete
    ).length;
  }
  // 这里 的 computed 属性 简直就和 vue 的一样，对立面的值进行缓存，
  // 当然，和 react:hook 中的 useMem 也一样就是了
  get completedTodo() {
    return this.todos.filter(
      todo => todo.complete
    )
  }
  get unCompletedTodo() {
    return this.todos.filter(
      todo => !todo.complete
    )
  }
 
  addTodo(task) {
    let id = 0;
    if (this.todos.length !== 0) {
      id = this.todos[this.todos.length - 1].id + 1
    }
    this.todos.push({
      task: task,
      complete: false,
      id
    });
  }
  deleteTodo(task) {
    const index = this.todos.findIndex(todo => todo === task);
    this.todos.splice(index, 1)
  }
  toggleTodo(task) {
    console.log(task)
    task.complete = !task.complete
    
  }
}
 
// 在这里对 数据进行包装， 注意 这里 包装的对象 必须是一个 类
decorate(TodoStore, {
  todos: observable,
  unComputedTodosCount: computed,
  completedTodo: computed,
  unCompletedTodo: computed,
  addTodo: action.bound,
  deleteTodo: action.bound,
  toggleTodo: action.bound,
})
 
const todoStore = new TodoStore();

export default todoStore