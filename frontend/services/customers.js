var CustomersService = {
    getCustomers: function() {
        $.ajax({
            url: 'http://localhost/final-2025-fall/backend/rest/customers',
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // Handle success
                console.log('Customers retrieved successfully:', data);

                const customersTable = document.getElementById('customer-meals-body');

                customersTable.innerHTML = ''; // Clear existing rows

                data.forEach(element => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${element.first_name}</td>
                        <td>${element.last_name}</td>
                        <td>${element.birth_date}</td>
                    `;
                    customersTable.appendChild(row);
                    
                });
            },
            error: function(xhr, status, error) {
                // Handle error
                console.error('Error retrieving customers:', error);
            }
        });
    
}
}