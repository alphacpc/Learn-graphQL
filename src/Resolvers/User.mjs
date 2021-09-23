import { db } from "../Datas/db.mjs";

export const User = {
    todos: ({id}, args, context, info) =>{
        return db.Todos.filter( element => element.userId == id)
    }
}