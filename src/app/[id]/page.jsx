export default async function Id({ params }) {
  
  const todo = await getTodo(params.id);

  return todo.userId ? (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <span>User ID: {todo.userId}</span>
      <span>Todo ID: {todo.id}</span>
      <span>Title: {todo.title}</span>
      <span>Completed: {todo.completed ? 'True' : 'False'}</span>
    </div>
  ) : (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <span>Todo not found</span>
    </div>
  )
}

const getTodo = async (id) => {

  const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + id)
  const todo = await res.json()

  return todo
}