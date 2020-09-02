const mongoose = require('mongoose')

let database
let userSchema

const connectDatabase = async() => {
    database = database || mongoose.connect('mongodb://127.0.0.1:27017/revisao', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    return database
}

const createUserSchema = async(database) => {
    if(userSchema) {
        return;
    }

    userSchema = new database.Schema({
        name: String,
        password: String,
        email: String
    }, {
        timestamps: true
    })

    database.model('User', userSchema)
}

// Criando o CRUD(Create, Read, Update, Delete)

// Create

const createUser = async(body) => {
    let database = await connectDatabase()
    await createUserSchema(database);
    const {User} = database.models

    const user = new User({...body})

    user.save()

    return user
}

// Read

const readUsers = async() => {
    let database = await connectDatabase()
    await createUserSchema(database);
    const {User} = database.models

    const users = User.find()

    return users
}

// Update

const updateUser = async({id}, {name, password, email}) => {
    let database = await connectDatabase()
    await createUserSchema(database);
    const {User} = database.models

    return User.updateOne({_id: id}, {name, password, email})
}

// Delete

const deleteUser = async({id}) => {
    let database = await connectDatabase()
    await createUserSchema(database);
    const {User} = database.models

    return User.deleteOne({_id: id})
}

module.exports = {
    createUser,
    readUsers,
    updateUser,
    deleteUser
}