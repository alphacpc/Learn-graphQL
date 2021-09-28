export const Subscription = {
    todo:{
         subscribe: (root, args, { pubsub }, info) => {
            console.log("test")
            return pubsub.asyncIterator('todo');
        }
    }   
}