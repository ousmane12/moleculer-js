import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

function generateId(){
    return Math.floor(Math.random() * 100) + 1;
}

const users = [];

broker.createService({
    name: 'user',
    actions: {
        async createUser(context) {
            const {username, email} = context.params;
            const newUser = {id: generateId(), username, email};
            users.push(newUser);
            return newUser;
        },
        async getUsers(context) {
            return users;
        }
    }
});

export default broker;