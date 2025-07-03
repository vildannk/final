var FoodsService = {
    getFoods: function(customerID) {
        $.ajax({
            url: 'http://localhost/final-2025-fall/backend/rest/customer/meals/' + customerID,
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                const foodsTable = document.getElementById('foodsTable');
                foodsTable.innerHTML = ''; // Clear existing rows

                data.forEach(function(food) {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${food.name}</td>
                        <td>${food.brand}</td>
                        <td><img src="${food.image}" alt="${food.name}" style="width: 50px; height: 50px;"></td>
                    `;
                    foodsTable.appendChild(row);
                });
                console.log('Foods retrieved successfully:', data);
            },
            error: function(xhr, status, error) {
                console.error('Error retrieving foods:', error);
            }
        });
    }
};