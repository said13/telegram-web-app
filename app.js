document.getElementById('createAdForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const role = document.getElementById('role').value;
    const type = document.getElementById('type').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const location = document.getElementById('location').value;
    console.log(`Sole: ${role}, Type: ${type}, Quantity: $quantity, Price: ${price}, Location: ${location}`);
    alert('Ad created successfully!');
});

document.getElementById('roleSwitchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const roleSwitch = document.getElementById('roleSwitch').value;
    console.log(`Role switched to: ${roleSwitch}`);
    alert('Role switched successfully!');
});
