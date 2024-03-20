# CardRocket

CardRocket es una aplicación web que permite a los desarrolladores web visualizar y personalizar tarjetas con diferentes estilos. Esta herramienta está diseñada para ayudar a la comunidad de desarrolladores a ahorrar tiempo al crear y diseñar tarjetas para sus sitios web.

## Características

- Visualización de tarjetas con diferentes estilos y diseños.
- Personalización de colores, tipografías y otros elementos de diseño.
- Exportación de tarjetas personalizadas en diferentes formatos.
- Interfaz de usuario intuitiva y fácil de usar.

## Tecnologías utilizadas

- Frontend: Angular
- Backend: Flask (Python)
- Base de datos: SQLite (puede ser cambiada a una base de datos más robusta según las necesidades)

## Instalación

Requisitos previos:

- Node.js
- Python 3.x
- Angular CLI
- Flask

## Pasos para la instalación

1. **Clona este repositorio en tu máquina local:**

    ```bash
    git clone https://github.com/tu-usuario/CardRocket.git
    ```

2. **Navega al directorio del frontend:**

    ```bash
    cd CardRocket/frontend
    ```

3. **Instala las dependencias del frontend:**

    ```bash
    npm install
    ```

4. **Navega al directorio del backend:**

    ```bash
    cd ../backend
    ```

5. **Crea y activa un entorno virtual para Python (opcional pero recomendado):**

    ```bash
    python -m venv env
    source env/bin/activate  # Linux/macOS
    .\env\Scripts\activate  # Windows
    ```

6. **Instala las dependencias del backend:**

    ```bash
    pip install -r requirements.txt
    ```

7. **Inicia el servidor Flask (dentro del entorno virtual activado):**

    ```bash
    python app.py
    ```

8. **Abre una nueva terminal y navega al directorio del frontend:**

    ```bash
    cd ../frontend
    ```

9. **Inicia el servidor de desarrollo de Angular:**

    ```bash
    ng serve --open
    ```

10.-La aplicación estará disponible en tu navegador en la dirección http://localhost:4200/


## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE.md para más detalles.

