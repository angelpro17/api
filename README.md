# Login API - JSON Server Backend

Backend API para la aplicación de login usando JSON Server.

## 🚀 Deployment en Render

### Pasos para Deploy:

1. **Crear repositorio en GitHub** con estos archivos
2. **Conectar a Render:**
   - Ir a [render.com](https://render.com)
   - Crear nuevo "Web Service"
   - Conectar repositorio GitHub

3. **Configuración en Render:**
   ```
   Build Command: npm install
   Start Command: npm start
   Environment: Node
   ```

4. **Variables de Entorno:**
   ```
   PORT=10000
   NODE_ENV=production
   ```

### 📡 Endpoints Disponibles:

- `GET /health` - Health check
- `GET /api/users` - Obtener todos los usuarios
- `POST /api/users` - Crear nuevo usuario
- `GET /api/users/:id` - Obtener usuario por ID
- `PUT /api/users/:id` - Actualizar usuario
- `DELETE /api/users/:id` - Eliminar usuario

### 🔧 Desarrollo Local:

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Ejecutar en producción
npm start
```

### 🌐 URL de Producción:

Una vez deployado, tu API estará disponible en:
```
https://tu-app-name.onrender.com/api
```

### 🔗 Conectar con Frontend:

Actualiza la variable `JSON_SERVER_URL` en tu frontend:
```javascript
const JSON_SERVER_URL = "https://tu-app-name.onrender.com/api"
```

### 📝 Notas:

- Los datos se reinician en cada deploy
- Para persistencia real, considera migrar a PostgreSQL
- CORS configurado para desarrollo y producción
- Logs automáticos para debugging# api
