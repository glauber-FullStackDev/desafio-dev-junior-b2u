module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    /* port: 8080, */
    username: 'admin',
    password: 'admin',
    database: 'admin',
    define: { 
        timestamps: true,                    // created_at, updated_at
        underscored: true                    // snake case, padrão pascal case
    }
}