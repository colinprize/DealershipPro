# CarCar

Team:

* Colin Service
* Luis - Sales

## Design
CarCar allows users to document sales, services, and current inventory.

Their are several microservices written in React interfacing with a Django backend API. 

The inventory microservice allows for adding manufacturers, car models, and vehicles to inventory.

The service microservice allows for adding technicians, making appointments, viewing made appointments, and showing service history of cars tied to their Vin Numbers.

The sales microservice shows car sales, displays sales records, and manages customers and salespeople.

The poller polls for the Automobile Value Object from the Inventory API. 


## Service microservice

Service Microservice Models


    Technician:
        first_name
        last_name
        employee_id

    AutomobileVO:
        vin
    
    Appointment:
        date_time
        reason
        status
        vin
        is_vip
        customer
        technician(Foreign key with Technician)

If the car was purchased from Inventory then they receive VIP treatment

## Sales microservice

Explain your models and integration with the inventory
microservice, here.





## How to Run this Project

1. cd into the directory you would like the project to be run from and type git clone https://gitlab.com/ColinPrize/project-beta.git

2. cd into the project directory:
    project_beta

3. Next you will run the following three commands:
    1. docker volume create beta-data
    2. docker-compose build
    3. docker-compose up

4. if you are macOS you will see a warning about an environment variable OS missing. You can safely ignore this

## Project Diagram

- Insert a diagram of the different services in your application, how they interact with each other, ports and URLs, Models and VO

## API Documentation

- For each of the services, add the documentation describing how to interact with each endpoint across the various HTTP methods implemented. Include the information that is needed for a request and where it needs to be included in the request(ie. header, path parameter, request body). Include the information that is returned from the server in the response. Insomnia can be very helpful in helping you put together this information