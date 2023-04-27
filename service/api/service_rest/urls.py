from django.urls import path
from .views import api_technicians, api_list_appointments, cancel_appointment, finish_appointment, delete_appointment, delete_technician

urlpatterns = [
    path(
        "technicians/", api_technicians, name="api_technicians"
    ),
    path(
        "appointments/", api_list_appointments, name="api_list_appointments"
    ),
    path(
        "appointments/<int:id>/cancel", cancel_appointment, name="cancel_appointment"
    ),
    path(
        "appointments/<int:id>/finish", finish_appointment, name="finish_appointment"
    ),
    path(
        "technicians/<int:id>", delete_technician, name="delete_technician"
    ),
    path(
        "appointments/<int:id>", delete_appointment, name="delete_appointment"
    ),
#     path(
#         "showappointment/<int:pk>", api_detail_appointments, name="api_detail_appointments"
#     )
]
