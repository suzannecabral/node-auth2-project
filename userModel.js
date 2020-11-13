const db = require('./data/dbConfig');

module.exports = {
  getAll(){
    return db('users');
  },
  getById(userId){
    return db('users')
      .where('users.id',userId)
      .first();
  },
  getByName(username){
    return db('users')
      .where('users.username',username)
      .first();
  },
  async addNew(newUser){
    const [id] = await db('users').insert(newUser);
    
    return db('users')
      .where('users.id', id)
      .first();
  },
}