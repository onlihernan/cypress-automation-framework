# cypress-automation-framework

<!-- TAGS PARA PRACTICAR EN LOS EJERCICIOS
Los TAGS nos devuelven en la terminal un cruadro con resultados de los tests corridos

npx cypress run -e TAGS='@login' --headed
npx cypress run -e TAGS='@login or @contact-us' --headed
npx cypress run -e TAGS='@smoke' --headed  (@smoke se colocan encima de cualquier scenario dentro de una feature)
npx cypress run -e TAGS='(@login or @contact-us) and not @smoke' --headed
npx cypress run cypress/e2e/*.feature --headed -->


<!-- APUNTES -->
- Crear a archivo en e2e terminado en .feature (ej. Contact_Us.feature) 
    -usamos palabras reservadas:
    Feature: "titulo de la feature"
    Background: estas se colocan arriba de todo fuera de los (Scenario), se usan para evitar repetir los mismos 
    pasos en los diferentes (Scenario)
    Scenario: "titulo del Scenario" - para completar este punto debemos hacer un recorrido en el SUT siguiendo
    el recorrido que haría el usuario y anotandolo de la siguiente manera
    Given:
    When:
    And:
    Then:
        

<!-- CUSTOMS SCRIPTS
en la carpeta package.json se insertan scripts que creemos para ejecutar ciertos tests
con el nombre que nosotros queramos por ej:
"full-regression-headed-chrome": "cypress run --headed --browser chrome --spec 'cypress/e2e/*.feature'",
en donde "full-regression-headed-chrome" es el nombre que elegimos,
y cypress run son los comandos para correr un test,
y --headed --browser chrome indica como y donde ejecutamos un test, donde headed
    indica que el test se corre abriendo una ventana en chrome
y --spec 'cypress/e2e/*.feature' inidca que se testean todas las features que se esten
    en la carpeta e2e
o bien --spec 'cypress/e2e/Contact_Us.feature' en caso de que queramos testear esta 
    feature puntualmente
para correr estos scripts usamos en la terminal lo siguiente: 
npm run "elnombredelscriptquecreamos" 

Ademas podemos utilizar customs scripts con tags de la siguiente manera:
"contact-us-tests-headed": "cypress run -e TAGS=\"@contact-us\" --headed" donde \ se usa para
evitar inconvenientes al tener dos " juntas, entonces \" texto \" evita eso. 
NOTA: si quitamos --headed el test corre en modo headless 
NOTA2: con "or" key word podemos correr test de 2 tags e.g. TAGS=\"@smoke or @contact-us\"
NOTA3: con and not podemos excluir los TAGS que queramos
-->

<!-- 
HTML REPORTS:
MUY IMPORATNTE ESTOS REPORTES SE SOBREESCRIBEN

en package.json "cypress-cucumber-preprocessor" colocamos lo siguiente:
    "html": {
      "enabled": true,
      "output": "cypress/reports/cucumber-html/cucumber-report.html"
      }
para obtener estos reportes debemos ejecutar mediante npm run y pegamos el nombre de un 
custom script que hayamos creado en el archivo de package.json
para ver el reporte vamos al archivo que se creó segun el nombre que le dimos a la
carpeta y con click derecho seleccionamos "open in file explorer"

por default se crea un archivo ndjson en la carpeta de node_modules para modificar la
locacion colocamos en package.json lo siguiente:
"messages": {
      "enabled": true,
      "output": "cypress/reports/cucumber-ndjson/cucumber-report.ndjson"
      }
NOTA: los reportes se sobreescriben

JSON REPORTS:
son utiles para crear reportes avanzados con jenkins y otros programas.
seguir pasos de instalacion en internet ya que es bastante complicado

agregar en package.json lo siguiente:
"json": {
        "enabled": true,
        "formatter": "cucumber-json-formatter",
        "output": "cypress/reports/cucumber-json/cucumber-report.json"
      }
 -->

