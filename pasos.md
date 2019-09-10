# Angular

## Primeros pasos

1- Crear proyecto
2- Entender estructura del codigo

## Login

### Componentes, injectables, servicios, forms reactivos, httpClient, environments, router y guards

3- Crear componente de login
    - Crear componente
    - Ver el decorator "Component"
    - Armar html
    - Registrar modulo "ReactiveFormsModule"
    - Replicar estructura del html
4- Crear servicio de login
    - Crear servicio
    - Hablar de scope del servicio (inyector)
    - Registrar modulo "HttpClientModule"
    - Consumir API para loguearse
5- Usar environments para obtener la url base
6- Crear modelo de usuario
    - Usuario injectable
    - Almacenamiento en localStorage del jwt
    - Manejo de getters y setters (instalar dependecia "jwt-decode")
7- Errores y spinner
    - Instalar dependecia bootstrap ng-bootstrap
    - Directiva "ngIf"
8- Componente Logout
9- Router
    - Crear app.routes
    - Registralo en app module
    - tag "routerOutlet"
    - Cambiar ruta al loguearse
10- Guardas
    - Crear guarda para logueados y no logueados

### ABM pokemon

11- Listar pokemons
    - Directiva ngFor
    - Interpolacion
    - Agregar filtros (ngModel)
    - Agregar paginado
    - Armar el store
12- Crear pokemon
    - Modal
    - Entry components
13- Editar pokemon
    - Reutilizacion del modal
    - Inputs
