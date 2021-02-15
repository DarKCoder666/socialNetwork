const mongoose = require('mongoose')
const mongoURI = 'mongodb+srv://umid:umid123456@cluster0.i6knj.mongodb.net/basicApp?retryWrites=true&w=majority'
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
