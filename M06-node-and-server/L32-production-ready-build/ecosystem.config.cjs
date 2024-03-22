module.exports = {
  apps : [{
    name   : "hono-server",
    script : "./dist/index.js",
    env: {
      "PORT": 6000,
    }
  }]
}
