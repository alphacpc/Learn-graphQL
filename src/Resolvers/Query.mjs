import { db } from "../Datas/db.mjs";

export const Query = {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    getTodos: () => Todos,
    getTodoById: (root,args,context,info) => {
        const { id } = args;
        const todo = db.Todos.find(element => element.id === id )

        if(!todo){
            throw new Error(`Le todo numero ${id} n'existe pas ! Veuillez reessayer avec un autre.`)
        }

        return todo
    }
}