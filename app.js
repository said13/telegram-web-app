// Initialize Telegram Web App
const tg = window.Telegram.WebApp;

tg.ready();

// Access and display user info
function displayUserInfo() {
    const user = tg.initDataUnsafe.user;
    const userInfoDiv = document.createElement('div');
    userInfoDiv.id = 'user-info';
    userInfoDiv.innerHTML = `
        <h3>User Info</h3>
        <p>ID: ${user.id}</p>
        <p>First Name: ${user.first_name}</p>
        <p>Last Name: ${user.last_name}</p>
        <p>Username: ${user.username}</p>
    `;
    document.getElementById('content').appendChild(userInfoDiv);
}


// Event listeners for tabs
document.getElementById('mainTab').addEventListener('click', () => {
    loadMainContent();
});

document.getElementById('profileTab').addEventListener('click', () => {
    loadProfileContent();
});