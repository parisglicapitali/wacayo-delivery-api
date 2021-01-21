import { connect } from 'mongoose';

import keys from '../settings/keys';

connect(keys.database.URI, {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log(">>> Database is Connected"))
    .catch(err => console.error(err));