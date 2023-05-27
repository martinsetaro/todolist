module.exports = {
  
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
    },
    "plugins": [
      "react"
    ],
    "rules": {
      "react/prop-types": "off", // Desactiva la regla para verificar propTypes en componentes de React
      "react/react-in-jsx-scope": "off",
      "no-unused-vars": "error" // Desactiva la advertencia de importar React en los archivos JSX
    }
  
  
}
