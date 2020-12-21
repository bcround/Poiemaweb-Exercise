let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 나중에 스프레드 문법 배우면 다시 풀어볼 것.
function toggleCompletedById(id) {
  todos = todos.map(todo => {
    if (todo.id === id) todo.completed = !todo.completed;
    return todo;
  });
}

toggleCompletedById(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/