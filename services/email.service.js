import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

broker.createService({
    name: 'email',
    actions: {
        sendEmail(context) {
            const {recipient, subject, content} = context.params;
            // simulate email sending
            console.log(`Sending email to ${recipient} with ${subject}`);
            console.log(`Content: ${content}`); 
            return `Email sent to ${recipient}`;
        }
    }
});

export default broker;