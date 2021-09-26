
export const User = {
    todos: ({id}, args, { db }, info) =>{
        return db.Todos.filter( element => element.userId == id)
    }
}