let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function getMaxId() {
  return todos.reduce((acc, cur) => acc > cur.id ? acc : cur.id, 0);
}

console.log(getMaxId()); // 3
