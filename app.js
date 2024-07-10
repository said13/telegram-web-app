document.getElementById('mainTab').addEventListener('click', () => {
    loadMainContent();
});

document.getElementById('profileTab').addEventListener('click', () => {
    loadProfileContent();
});

function loadMainContent() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Main Tab</h1>
        <p>Welcome to the Commodity Trading Platform.</p>
        <div>
            <h2>Commodity Listings</h2>
            <p>Here you will see a list of commodities.</p>
            <!-- Mock data can be added here -->
        </div>
    `;
}

function loadProfileContent() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Profile Tab</h1>
        <p>Manage your profile and ads here.</p>
        <div>
            <button onlclick="createAd()">Create Ad</button>
            <!-- Mock data for user profile can be added here -->
        </div>
    `;
}

function createAd() {
    const content = document.getElementById('content');
    content.innerHTML = `
        <h1>Create Ad</h1>
        <form>
            <label for="name">Commodity Name:</label>
            <input type="text" id="name" name="name"><br><br>
            <label for="description">Description:</label>
            <textarea id="description" name="description"></textarea><br><br>
            <label for="price">Price:</label>
            <input type="number" id="price" name="price"><br><br>
            <button type="submit">Submit</button>
        </form>
    `;
}

// Load main content by default
loadMainContent();
