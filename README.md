# Asincronismo en JavaScript

Recurso dirigido a la Camada 7 de la carrera Certified Tech Developer, acerca de Asincronismo con JavaScript.

**NOTA IMPORTANTE**: El código está basado en Node.js, por lo tanto, el funcionamiento para usarlo en el navegador será distinto. Sin embargo, los conceptos y la aplicación de la estructura es la misma; la diferencia es que en el navegador no será necesario importar paquetes puesto que el navegador ya lo trae incluido. Por lo tanto, hay que realizar su respectiva adaptación.

Si hay dudas, ¡no te preocupes! Podés escribirme al DM por discord y con todo el gusto te ayudaré.

## Callbacks

**Ventajas**:

- Nos permite garantizar que tenemos una función y que recibe otra función sin problema alguno.
- Son universales, corren en cualquier navegador.

**Desventajas**:

- Su composición se torna compleja debido a su anidación excesiva, lo que puede generar desentendimiento por parte del programador (y verse mal..)
- Flujo poco intuitivo
- Manejo de errores muy repetitivo y complicado para mantener a largo tiempo

## Promesas

**Ventajas**:

- Facilmente enlazables con sus then y return.
- Da una gran capacidad de trabajar con asincronismo

**Desventajas**:

- No maneja excepciones, sino un catch al final
- Es muy propenso a errores si no se realiza adecuadamente el llamado siguiente
- Requiere polyfill en todos los navegador para que sea funcional!

## Async/await

**Ventajas**:

- Se puede usar el try/catch
- Son más fáciles de leer y su legibilidad es más alta
- Su uso es más amigable :)

**Desventajas**:

- Se tiene que esperar a cada uno de sus llamados
- También requiere un polyfill para que funcione en todos los navegadores