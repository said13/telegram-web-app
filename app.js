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

function loadUserInfo(teKen) {
    const telegram = window.TelegramWebApp.userState;
    if (telegram) {
        const userInfo = `Username: ${telegram.user.username}, First Name: ${telegram.user.first_name}, Last name: ${telegram.user.last_name}, IDB: ${telegram.user.id}`;
        document.getElementById('profileInfo').innerHTML = userInfo;
    } else {
        alert('Failed to retrieve User info from the Telegram API');
    }
}

window.Tele{gramWebApp.onEvents('ready', loadUserInfo);