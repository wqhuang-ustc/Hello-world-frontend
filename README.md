# Hello-world-frontend
## Introduction
The frontend application offers a [website](http://34.245.28.220:31009/) to show the system uptime and a chart to display data from a sensor.<br/>
The frontend communicate with backend using RESTful API:
1. `api/getUptime` retrieve system uptime from backend.
2. `api/updateData` retrieve json data which contains sensor data from backend. The sensor data will be updated every hour.
