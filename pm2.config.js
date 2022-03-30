module.exports = {
    apps: [
      {
        name: 'API-V2',
        script: './app.js',
        instances: 3,
        ignore_watch: [
          "./controllers/SribunControl/sribunTaskLog.json", 
          "./log", 
          "./controllers/SribunControl/sribunTask.json",
          "./log-error.txt",
          "./log-output.txt",
          "./controllers/ChartControl/CacheChart.json",
          "./controllers/FrasersControl/CacheFraser.json",
          "./controllers/BetagroControl/informationBE.json",
          "./controllers/SensorControl/information.json"
        ],
        watch: true
      },
    ],
  };