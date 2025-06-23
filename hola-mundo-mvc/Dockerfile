# Usar la imagen oficial de Node.js como base
FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar archivos de configuración de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci --only=production

# Copiar el código de la aplicación
COPY . .

# Crear usuario no-root para seguridad
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Cambiar propiedad de archivos al usuario nodejs
RUN chown -R nextjs:nodejs /usr/src/app
USER nextjs

# Exponer el puerto
EXPOSE 3000

# Comando de salud para Docker
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node healthcheck.js

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]