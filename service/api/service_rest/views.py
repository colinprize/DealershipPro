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
            encoder=TechnicianEncoder
        )
    else:
        try:
            content= json.loads(request.body)
            employeeid = content["employee_id"]
            employee = Technician.objects.get(employee_id=employeeid)
            content["employee_id"] = employee
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"message": "Could not create the technician"}
            )
            response.status_code = 400
            return response
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
        )
    else:
        request.method == "POST"
        content = json.loads(request.body)
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
        )
