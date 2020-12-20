let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 나중에 스프레드 문법 배우면 다시 풀어볼 것.
function toggleCompletedAll() {
  todos = todos.map(v => {
    if (!v.completed) v.completed = !v.completed;
    return v;
  })
}

toggleCompletedAll();

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: true }
]
*/