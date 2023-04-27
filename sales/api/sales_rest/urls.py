from django.urls import path
from .views import (api_salesperson_list,
                    api_detail_salesperson,
                    customer_details,
                    customer_list,
                    sales_list,
                    sale_details,
                    )

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
    path("sales/", sales_list, name="sales_list"),
    path("sales/<int:id>", sale_details, name="sale_details")

]
