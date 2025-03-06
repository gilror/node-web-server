import express from 'express';
import path from 'path';

export const startServer = (options) => {
    const { port, public_Path = 'public' } = options;

    const app = express();

    app.use(express.static(public_Path));

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_Path}'/index.html`);
        res.sendFile(indexPath);
    });

    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    })
}