// таблиця замовлень (модель телефону, статус, коментар, зв'язок з юзером).
import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config()

const { Pool } = pg;
const pool = new Pool({
   connectionString: `${process.env.DB_URL}`,
   ssl: {
      rejectUnauthorized: false
   }
});

const initializeDatabase = async () => {

   const createTableQuery = (`
    CREATE TABLE IF NOT EXISTS ORDERS (
        order_id SERIAL PRIMARY KEY,
        client_id INTEGER REFERENCES users(id),
        device_type TEXT NOT NULL,
        device_model VARCHAR(100) NOT NULL,
        os_version TEXT,
        date_of_purchase DATE,
        issue_description TEXT NOT NULL,
        status TEXT NOT NULL check (status in (
          'new', 
          'in progress', 
          'waiting customer response',
          'waiting spare parts',
          'failed',
          'done'
        )) default 'new',
        technician_comment TEXT,
        assigned_to INTEGER REFERENCES users(id),
        cost DECIMAL(10, 2),
        created_at TIMESTAMP NOT NULL default now(),
        updated_at TIMESTAMP NOT NULL default now()
      );
      `)
   try {
      await pool.query(createTableQuery);
   } catch (error) {
      console.error('!! Error initializing database');
      // console.error('Full error:', error);
      throw error;
   }
};



await initializeDatabase();