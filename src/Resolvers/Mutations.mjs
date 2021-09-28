export const Mutation ={
    addTodo: (root, {addTodoInput}, {db, pubsub } , info) => {
        const {name, content, user} = addTodoInput
        
        if(! existInArray(db.Users, "id", user)){
            throw new Error(`Le user "${user}" n'existe pas !`);
        }else{
            const newTodo = {
                id: db.Todos[db.Todos.length - 1].id + 1,
                status : "WAITING",
                name,
                content,
                user: user
            }

            db.Todos.push(newTodo);
            pubsub.publish("todo",{todo: newTodo});
            return newTodo;
        }
    },
    updateTodo: (root, {id, updateTodoInput}, {db} , info) => {
        if( updateTodoInput.userId && !existInArray(db.Users, `${id}`, updateTodoInput.userId)){
            throw new Error(`Le user "${updateTodoInput.userId}" n'existe pas !`);

        }else{
            const todo = db.Todos.find((todoItem) => todoItem.id === id);

            if(!todo){
                throw new Error(`Le Todo "${updateTodoInput.userId}" n'existe pas !`);
            }else{
                for(let key in updateTodoInput){
                    todo[key] = updateTodoInput[key];
                }

                return todo;
            }
        }
    },
    deleteTodo: (root, { id }, {db} , info) => {
        const indexTodo = db.Todos.findIndex((todo) => todo.id === id);

        if(indexTodo != -1){
            throw new Error(`Le Todo "${id}" n'existe pas !`);
        }else{
            const [todo] = db.Todos.splice(indexTodo,1);
            return todo;
        }
    }
}


function existInArray(array, attr, value){
    return array.some((element)=> element[attr] === value);   
}