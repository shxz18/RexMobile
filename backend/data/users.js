import bcrypt from 'bcryptjs'


const users = [
    {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
},
{
    name: 'Muhammad Shaziman',
    email: 'shxz@example.com',
    password: bcrypt.hashSync('123456', 10)
    
},
{
    name: 'Aishah',
    email: 'aishah@example.com',
    password: bcrypt.hashSync('123456', 10)
    
},
]
export default users