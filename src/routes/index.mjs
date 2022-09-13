import fs from 'fs/promises';
import path from 'path';
import { Router } from 'express';
import commons from '../util/common.mjs';

const { __dirname } = commons(import.meta.url);
const router = Router();

const routes = (app) => {
    router.get('/', async (req, res) => {
        const files = await fs.readdir(path.join(__dirname, '../public/flags'));
        const flag = files[Math.floor(Math.random() * files.length)];
        res.render('home', {
            files: files.map((x) => ({
                name: x.replace(path.extname(flag), '').split('_').join(' '),
                value: x.replace(path.extname(flag), ''),
            })),
            flag: {
                path: flag,
                name: flag.replace(path.extname(flag), ''),
                extname: path.extname(flag),
                width: 300,
                height: 200,
            },
            url: `http://localhost:${app.get('port')}`,
        });
    });

    app.use(router);
}

export default routes;
