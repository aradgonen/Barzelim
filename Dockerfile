FROM openjdk:15.0.2-jdk
COPY target/barzelim-0.0.1-SNAPSHOT.jar .
CMD ["java","-jar","barzelim-0.0.1-SNAPSHOT.jar"]
EXPOSE 8080