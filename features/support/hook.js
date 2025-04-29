const fs = require('fs');
const path = require('path');
const { BeforeAll } = require('@cucumber/cucumber');

BeforeAll(() => {
    const logPath = path.resolve(__dirname, '../../tracking.log');
    if (fs.existsSync(logPath)) {
        fs.unlinkSync(logPath); // ❌ Xóa log cũ
        console.log('🧹 tracking.log has been reset.');
    }
});
