class HelloModel {
    // Obtener mensaje por defecto
    static getDefaultMessage() {
        return {
            message: '¡Hola Mundo desde MVC!',
            timestamp: new Date().toLocaleString('es-ES'),
            version: '1.0.0'
        };
    }

    // Obtener mensaje personalizado
    static getPersonalizedMessage(name) {
        return {
            message: `¡Hola ${name}! Bienvenido a nuestra aplicación MVC`,
            timestamp: new Date().toLocaleString('es-ES'),
            version: '1.0.0'
        };
    }

    // Obtener información de la aplicación
    static getAppInfo() {
        return {
            name: 'Hola Mundo MVC',
            description: 'Una aplicación simple usando el patrón MVC con Node.js y Express',
            author: 'Edison Campaña',
            architecture: 'Model-View-Controller'
        };
    }
}

module.exports = HelloModel;