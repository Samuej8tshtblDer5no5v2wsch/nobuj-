const mongoose = require('mongoose');\nconst UserSchema = new mongoose.Schema({\n  name: String,\n  email: String\n});\nmodule.exports = mongoose.model('User', UserSchema);
