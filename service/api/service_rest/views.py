from django.shortcuts import render
from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointment

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties =[
        'vin'
    ]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties =[
        'first_name',
        'last_name',
        'employee_id',
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        'date_time',
        'reason',
        'status',
        'vin',
        'customer',
        'technician'
    ]
    encoders= {
        "technician": TechnicianEncoder
    }
