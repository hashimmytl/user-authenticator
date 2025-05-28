import { dirname } from 'path';
import { fileURLToPath } from 'url';

const users = []



const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const showhtml = (req, res) => {
    res.sendFile(__dirname + '/Signup.html');
};

export const signup = (req,res) => {
       const {username,password} = req.body
    const newuser = {username,password}
     users.push(newuser);
     console.log(users);

     res.redirect('/user/login')
}

export const loginhtml = (req, res) => {
    res.sendFile(__dirname + '/login.html');
};

export const login = (req,res) => {
    const {username,password} = req.body
    console.log(req.body);
    
    const user = users.find(u => u.username === username && u.password === password)
     console.log(user);
     
    if(user){
        req.session.user = user
        console.log('user stored in session:', req.session);
        res.redirect('/user/dashboard')
    }else{
        res.send('invalid login')
    }
    
}


export const dashboard = (req, res) => {
  if (req.session.user) {
    console.log(req.session.user);
    
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Dashboard</title>
        <style>
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          }
          body {
            background: #f0f4f8;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            color: #333;
          }
          .card {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 400px;
            width: 90%;
          }
          h1 {
            margin-bottom: 20px;
            font-size: 24px;
          }
          a {
            display: inline-block;
            margin: 10px;
            padding: 10px 20px;
            background-color: #3b82f6;
            color: white;
            text-decoration: none;
            border-radius: 8px;
            transition: background-color 0.3s ease;
          }
          a:hover {
            background-color: #2563eb;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Welcome, ${req.session.user.username} 👋</h1>
          <a href="/products/productspage">Go to Products</a>
          <a href="/user/logoutpage">Logout</a>
        </div>
      </body>
      </html>
    `);
  } else {
    res.redirect('/user/login');
  }
};

export const logoutpage = (req,res) => {
    req.session.destroy()
    res.redirect('/user/login')
}  

