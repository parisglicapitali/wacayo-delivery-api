import app from './app';

// database connection
import './database/connection';

const main = (port) => {
    app.listen(port);
    console.log(">>> Server on Port", port);
};

main(app.get('port'));