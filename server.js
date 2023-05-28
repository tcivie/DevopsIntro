const app = require('./src/index');
const port = process.env.PORT || 3000
/* eslint-disable-next-line no-unused-vars */
const server = app.listen(port, () => console.log(`Server listening on port ${port}`));
