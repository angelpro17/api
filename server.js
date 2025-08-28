const jsonServer = require('json-server')
const cors = require('cors')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({
  static: './public'
})

const port = process.env.PORT || 3001

// Configurar CORS para permitir requests desde el frontend
server.use(cors({
  origin: ['http://localhost:3000', 'https://tu-frontend.onrender.com'],
  credentials: true
}))

// Middlewares por defecto (logger, static, cors y no-cache)
server.use(middlewares)

// Middleware personalizado para logging
server.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`)
  next()
})

// Usar el router de JSON Server en la ruta /api
server.use('/api', router)

// Ruta de health check
server.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

// Iniciar servidor
server.listen(port, () => {
  console.log(`🚀 JSON Server running on port ${port}`)
  console.log(`📊 API available at: http://localhost:${port}/api`)
  console.log(`❤️  Health check: http://localhost:${port}/health`)
})

// Manejo de errores
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err)
  process.exit(1)
})

process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err)
  process.exit(1)
})