Requirements to build:
    Java JDK
    Maven
    Node.js
Project structure explanation:
- to work on ui:
    go to src -> main -> BarzelimUI
- to work on server:
    go to src -> main -> java
- to build new UI version:
    go to ui folder, run `npm run build` and copy the content of the generated build folder to src/main/resources/static
- to build the server again with new ui version
    in the base project folder, rum `mvn clean install`