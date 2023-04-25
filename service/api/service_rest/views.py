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

@require_http_methods(["GET", "POST","DELETE"])
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
    # else:
    #     request.method == "DELETE"
    #     count, _ = Technician.objects.filter(id=id).delete()
    #     return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET","POST", "DELETE"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments= Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
            safe=False
        )
    else:
        request.method == "POST"
        content = json.loads(request.body)
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            {"appointment": appointment},
            encoder=AppointmentEncoder,
            safe = False,
        )
