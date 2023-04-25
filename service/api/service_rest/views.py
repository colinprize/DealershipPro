from django.http import JsonResponse
from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointment
from django.views.decorators.http import require_http_methods
import json



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

@require_http_methods(["GET", "POST"])
def api_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
            safe=False
        )
    elif request.method == "POST":
        content= json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            {"technician": technician},
            encoder=TechnicianEncoder,
            safe=False,
        )
