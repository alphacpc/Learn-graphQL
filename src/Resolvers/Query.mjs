import { db } from "../Datas/db.mjs";

export const Query = {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    getTodos: () => db.Todos,
    getTodoById: (root,args,context,info) => {
        const { id } = args;
        const todo = db.Todos.find(element => element.id === id )

        if(!todo){
            throw new Error(`Le todo numero ${id} n'existe pas ! Veuillez reessayer avec un autre.`)
        }

        return todo
    },
    getUsers: () => db.Users,
    getUserById: (root,args,context,info) =>{
        const {id} = args;
        const user = db.Users.find(element => element.id === id)

        if(!user){
            throw new Error("Cet utilisateur n'existe pas! Veuillez reessayer avec un autre.")
        }

        return user;
    }
}