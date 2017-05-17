import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import auth from './controllers/auth';
import modules from './routes/modules';
import dashboard from './routes/dashboard';

dotenv.config();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(process.env.PORT_TEST, () => {
    console.log(`Server running at ${process.env.PORT_TEST}`);
});

app.post('/register', auth.register);
app.post('/login', auth.login);
app.get('/signOut', auth.signOut);
app.get('/module', modules.getModule);
app.post('/module', modules.submitAssesment);
app.get('/dashboard', dashboard);


// load the routess
export default app;
