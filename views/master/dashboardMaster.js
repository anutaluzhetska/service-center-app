//нові + свої замовлення
export const getDashboardMasterView = async (req, res) => {
    
    const html = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>Панель майстра</title>
        <style>
            table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f4f4f4; }
            .status-new { color: blue; font-weight: bold; }
        </style>
    </head>
    <body>
        <h1>Панель керування майстра</h1>

        <h2>🆕 Нові замовлення (вільні)</h2>
        <table id="new-orders-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Пристрій</th>
                    <th>Проблема</th>
                    <th>Дата</th>
                </tr>
            </thead>
            <tbody id="new-orders-body">
                </tbody>
        </table>

        <h2>🛠️ Мої замовлення в роботі</h2>
        <table id="my-orders-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Модель</th>
                    <th>Статус</th>
                    <th>Дія</th>
                </tr>
            </thead>
            <tbody id="my-orders-body">
                </tbody>
        </table>

        <script>
            // Функція для завантаження даних з API, яке ми написали раніше
            async function loadDashboardData() {
                try {
                    const response = await fetch('/api/master/dashboard-data');
                    const data = await response.json();

                    // Рендеримо нові замовлення
                    const newBody = document.getElementById('new-orders-body');
                    newBody.innerHTML = data.newOrders.map(order => \`
                        <tr>
                            <td>\${order.order_id}</td>
                            <td>\${order.device_model}</td>
                            <td>\${order.issue_description}</td>
                            <td>\${new Date(order.created_at).toLocaleDateString()}</td>
                        </tr>
                    \`).join('');

                    // Рендеримо замовлення майстра
                    const myBody = document.getElementById('my-orders-body');
                    myBody.innerHTML = data.myOrders.map(order => \`
                        <tr>
                            <td>\${order.order_id}</td>
                            <td>\${order.device_model}</td>
                            <td><strong>\${order.status}</strong></td>
                            <td><a href="/master/edit/\${order.order_id}">Редагувати</a></td>
                        </tr>
                    \`).join('');
                } catch (err) {
                    console.error('Помилка завантаження даних:', err);
                }
            }

            loadDashboardData();
        </script>
    </body>
    </html>
    `;
    res.send(html);
};