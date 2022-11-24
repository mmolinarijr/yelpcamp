import express from 'express';
import mongoose from 'mongoose';
import path, { dirname } from 'path';
import * as dotenv from 'dotenv';

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGOURL, {
    useNewUrlParser: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log('database connected successfully');
});

const dirnamePath = path.resolve();

app.set('view engine', 'ejs');
app.set('views', path.join(dirnamePath, 'views'));

app.listen(3000, () => {
    console.log('Serving on port 3000');
});

app.get('/', (req, res) => {
    res.render('home');
    // res.send('This is the boilerplate');
});

export default app;
