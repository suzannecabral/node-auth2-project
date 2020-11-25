require('dotenv').config;

module.exports={
  port:process.env.PORT || 9000,
  jwtSecret: process.env.JWT_SECRET || "Is it secret? is it safe?",
  rounds: process.env.HASH_ROUNDS || 15
};