from django.urls import path
from .views import api_technicians, api_list_appointments, cancel_appointment

urlpatterns = [
    path(
        "technicians/", api_technicians, name="api_technicians"),
    path(
        "appointments/", api_list_appointments, name="api_list_appointments"
    ),
    path(
        "appointments/<int:id>/cancel", cancel_appointment, name="cancel_appointment"
    )
]
