const fs = require('fs');
const path = require('path');

// รับข้อมูล JSON ที่ส่งมาทางพารามิเตอร์
const inputData = process.argv[2];
if (!inputData) {
    console.error('No input data provided');
    process.exit(1);
}

const data = JSON.parse(inputData);
const filePath = path.join(__dirname, 'allprod.json');

// อ่านไฟล์ JSON ปัจจุบัน
const currentData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// อัปเดตข้อมูล JSON
const updatedData = currentData.map(item => {
    const newItem = data.find(d => d.id === item.id);
    return newItem ? { ...item, ...newItem } : item;
});

// เขียนข้อมูลใหม่ไปยังไฟล์ JSON
fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2), 'utf8');

console.log('JSON file updated successfully');
