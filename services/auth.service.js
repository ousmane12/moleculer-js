import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

broker.createService({
    name: 'auth',
    actions: {
        async authUser(context){
            const { username, password } = context.params;
            if(username === 'admin' && password === 'password') {
                return {
                    success: true,
                    message: 'Authentication successful'
                }
            }else{
                return {
                    success: false,
                    message: 'Authentication failed'
                }
            }
        }
    }
});

export default broker;