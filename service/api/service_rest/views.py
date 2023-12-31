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
        'technician',
    ]

    def get_extra_data(self, o):
        return {"technician": o.technician.employee_id}


@require_http_methods(["GET", "POST"])
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

@require_http_methods(["DELETE"])
def delete_technician(request, id):
    count, _ = Technician.objects.filter(id=id).delete()
    return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET","POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments= Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.get(employee_id=content["technician"])
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "That technician doesn't exist"},
                status=400,
            )
        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False
        )

@require_http_methods(["PUT"])
def cancel_appointment(request, vin):
    appointment = Appointment.objects.get(vin=vin)
    appointment.cancel()
    return JsonResponse(
        appointment,
        encoder=AppointmentEncoder,
        safe=False
    )


@require_http_methods(["PUT"])
def finish_appointment(request, vin):
    appointment = Appointment.objects.get(vin=vin)
    appointment.finish()
    return JsonResponse(
        appointment,
        encoder=AppointmentEncoder,
        safe=False
    )

@require_http_methods(["DELETE"])
def delete_appointment(request, vin):
    count, _ = Appointment.objects.filter(vin=vin).delete()
    return JsonResponse({"deleted": count > 0})
