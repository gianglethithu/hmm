const fs = require('fs');
const path = require('path');

const logPath = path.resolve(__dirname, '../tracking.log');

function logStatus(trackingCode, status) {
    const time = new Date().toISOString();
    const logEntry = `[${time}] ${trackingCode}: ${status}\n`;
    fs.appendFileSync(logPath, logEntry, 'utf8');
}

function logError(trackingCode, error) {
    const time = new Date().toISOString();
    const logEntry = `[${time}] ${trackingCode}: ERROR - ${error.message || error}\n`;
    fs.appendFileSync(logPath, logEntry, 'utf8');
}

module.exports = { logStatus, logError };
