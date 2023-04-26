from django.urls import path
from .views import api_salesperson_list, api_detail_salesperson, customer_details, customer_list

urlpatterns = [
    path(
        "salesperson/<int:id>/",
        api_detail_salesperson,
        name="api_detail_salesperson",
    ),

    path(
        "salespeople/",
        api_salesperson_list,
        name="api_salesperson_list",
    ),

    path("customers/<int:id>/", customer_details, name="customer_details",),
    path("customers/", customer_list, name="customer_list"),
]
