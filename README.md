# nodejs-web-express-prometheus-hello-world

## Description
Another way to serve web content.
Uses prometheus to track visitors.

To see a graph of visitors:
- Nav to http://localhost:81
- Classic UI
  - Click Graph tab
    - Search: 'server_visits_count'
    - Duration 1m

For health check:
- Nav to http://localhost:81
- Targetes

## Tech stack
- nodejs
- prometheus

## Docker stack
- node:latest
- prom/prometheus:latest

## To run
`sudo ./install.sh -u`
- Available http://localhost
- App metrics http://localhost/metrics
- Prometheus console http://localhost:81

## To stop
`sudo ./install.sh -d`

## For help
`sudo ./install.sh -h`

## Credit
- https://dev.to/farnabaz/monitor-your-application-with-prometheus-2886
