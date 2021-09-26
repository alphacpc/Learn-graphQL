

export const Todo = {
    user: ({userId}, args, { db }, info) => {
        return db.Users.find(user => user.id === userId)
    } 
}