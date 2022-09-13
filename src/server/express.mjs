import express from 'express';
import hbs from 'express-handlebars';
import path from 'path';
import commons from '../util/common.mjs';
import routes from '../routes/index.mjs';

const { __dirname } = commons(import.meta.url);

const app = express();

app.set('port', process.env.port || 3000);
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', '.hbs');
app.engine('.hbs', hbs.engine({
    defaultLayout: 'main',
    partialsDir: path.join(app.get('views'), 'partials'),
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs',
}))

routes(app);

export default app;
