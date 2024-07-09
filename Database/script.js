const sheetId = '1pe8ZSERgi68jnXpJRH5U6w6hoTJr27wHWtIGcB51vE8';
const apiKey = 'AIzaSyDgxTWXvIUQND4C7gzapRW6KNqEaBPQ8Y0'; // ใช้ Google API Key ของคุณ
const rootPassword = 'admin';

function login() {
    const password = document.getElementById('password').value;
    if (password === rootPassword) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
    } else {
        alert('รหัสผ่านไม่ถูกต้อง');
    }
}

function viewData() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('view-data').style.display = 'block';
    fetchData();
}

function editData() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('edit-data').style.display = 'block';
}

function backToMenu() {
    document.getElementById('view-data').style.display = 'none';
    document.getElementById('edit-data').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

function fetchData() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const values = data.values;
            document.getElementById('data-view').value = JSON.stringify(values, null, 2);
        });
}

function updateData() {
    const updatedData = JSON.parse(document.getElementById('data-edit').value);
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`;
    const body = {
        values: updatedData
    };
    
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {
        alert('อัพเดทข้อมูลเรียบร้อยแล้ว');
        backToMenu();
    });
}
