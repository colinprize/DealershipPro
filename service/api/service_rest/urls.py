from django.urls import path
from .views import api_technicians, api_list_appointments

urlpatterns = [
    path(
        "technicians/", api_technicians, name="api_technicians"),
    path(
        "appointments/", api_list_appointments, name="api_list_appointments"
    )
]
