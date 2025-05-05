const fs = require('fs');
const path = require('path');
const { BeforeAll, After } = require('@cucumber/cucumber');

const logPath = path.resolve(__dirname, '../../tracking.log');

BeforeAll(() => {
    if (fs.existsSync(logPath)) {
        fs.unlinkSync(logPath); // ❌ Xóa log cũ
        console.log('🧹 tracking.log has been reset.');
    }
});

After(function (scenario) {
    if (scenario.result.status === 'FAILED') {
        const logMessage = `[${new Date().toISOString()}] ❌ Scenario FAILED: "${scenario.pickle.name}" - Tracking: ${this.trackingCode || 'N/A'}\n`;
        fs.appendFileSync(logPath, logMessage);
    }
});
