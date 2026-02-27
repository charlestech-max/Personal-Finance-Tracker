const spawn = require('child_process').spawn;

function getInsights() {
    return new Promise((resolve, reject) => {
        const pythonProcess = spawn('python', ['./utils/machineLearning.py']);
        pythonProcess.stdout.on('data', (data) => {
            resolve(JSON.parse(data.toString()));
        });
        pythonProcess.stderr.on('data', (data) => {
            reject(data.toString());
        });
    });
}

module.exports = getInsights;