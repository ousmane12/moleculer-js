import UserService from './services/user.service.js';
import EmailService from './services/email.service.js';
import AuthService from './services/auth.service.js';

async function startApp(){
    await UserService.start();
    await EmailService.start();
    await AuthService.start();
    try {
        // simulate creation of user
        const newUser = await UserService.call('user.createUser', {
            username: 'John',
            email: 'john@example.com'
        });
        console.log("New user created", newUser);
        const users = await UserService.call('user.getUsers');
        console.log("All users:", users);
        // simulate sending email
        const emailResult = await EmailService.call('email.sendEmail', {
            recipient: newUser.email,
            subject: `Welcome to our platform ${newUser.username}`,
            content: 'Thanks for signing up'
        });
        console.log("Email sent", emailResult);
        // simulate authentication
        const authResult = await AuthService.call('auth.authUser', {
            username: newUser.username,
            password: 'password'
        });
        console.log("Auth result:", authResult);
    } catch (error) {
        console.log(error);
    } finally {
        await UserService.stop();
        await EmailService.stop();
        await AuthService.stop();
    }
}

startApp();