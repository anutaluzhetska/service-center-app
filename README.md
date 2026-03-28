# СТРУКТУРА:
SERVICE-CENTER-APP/
├── config/
│   └── db.js      # Налаштування підключення database
├── controllers/
│   ├── authController.js
│   ├── clientController.js
│   ├── masterController.js
│   └── adminController.js
├── middleware/
│   └── authMiddleware.js # Перевірка: чи залогінений юзер? чи він адмін?
├── models/             
│   ├── index.js
│   ├── user.js
│   └── order.js
├── public/
│   ├── css/
│       └── style.css
│   ├── js/
│   └── pictures/
├── routes/
│   ├── auth.js
│   ├── client.js
│   ├── master.js
│   └── admin.js
├── views/              
│   ├── partials/
│   ├── auth/
│   ├── client/
│   ├── master/
│   └── admin/
├── .env                 
├── app.js               
└── ... (інші файли)

# 