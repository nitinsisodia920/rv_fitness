import bcrypt from 'bcryptjs';
const data={
   users:[
        {
            name: 'Sample User',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456')
        }
   ]
};

export default data;