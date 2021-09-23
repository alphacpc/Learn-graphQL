import { db } from "../Datas/db.mjs"

export const Todo = {
    user: ({userId}, args, context, info) => {
        return db.Users.find(user => user.id === userId)
    } 
}