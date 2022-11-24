import express from 'express';
// import views from 'views';
import path from 'path';

const app = express;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(300, () => {
    console.log('Serving on port 3000');
});

app.get('/', (req, res) => {
    res.render('home');
    res.send('This is the boilerplate');
});
