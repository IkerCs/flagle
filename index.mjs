import app from './src/server/express.mjs';

app.listen(app.get('port'), async () => {
    console.log(`Conectado http://localhost:${app.get('port')}/ con éxito`)
});
