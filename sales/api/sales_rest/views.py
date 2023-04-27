from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from .models import AutomobileVO, SalesPerson, Customer, SaleRecord
from django.http import JsonResponse
import json


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
    ]


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
    ]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "id"
    ]


class SaleRecordEncoder(ModelEncoder):
    model = SaleRecord
    properties = [
        "automobile",
        "sales_person",
        "cusomer",
        "price",
        "id"
    ]

    encoders = {
        "automobile": AutomobileVOEncoder(),
        "sales_person": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_salesperson_list(request):
    if request.method == "GET":
        salesperson = SalesPerson.objects.all()
        return JsonResponse(
            {'salesperson': salesperson},
            encoder=SalesPersonEncoder
        )
    else:
        content = json.loads(request.body)
        salesperson = SalesPerson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET", "PUT"])
def api_detail_salesperson(request, id):
    if request.method == 'GET':
        try:
            salesperson = SalesPerson.objects.get(id=id)
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse({"message": "Invaild ID"}, status=404)

    elif request.method == 'PUT':
        try:
            content = json.loads(request.body)
            SalesPerson.objects.filter(id=id).update(**content)

            salesperson = SalesPerson.objects.get(id=id)
            return JsonResponse(
                salesperson,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except SalesPerson.DoesNotExist:
            return JsonResponse({"message": "Invaild ID"}, status=404)


@require_http_methods(["DELETE"])
def delete_salesperson(request, id):
    if request.method == "DELETE":
        count, _ = SalesPerson.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def customer_list(request):
    if request.method == "GET":
        customer = Customer.objects.all()
        return JsonResponse(
            {'customer': customer},
            encoder=CustomerEncoder
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )


@require_http_methods(["DELETE", "GET", "PUT"])
def customer_details(request, id):
    if request.method == 'GET':
        try:
            customer = Customer.objects.get(id=id)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False
            )
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Invaild ID"}, status=404)

    elif request.method == 'PUT':
        try:
            content = json.loads(request.body)
            Customer.objects.filter(id=id).update(**content)

            customer = Customer.objects.get(id=id)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Invaild ID"}, status=404)
    else:
        try:
            count, _ = Customer.objects.filter(id=id).delete()
            return JsonResponse({"deleted": count > 0})
        except Customer.DoesNotExist:
            return JsonResponse({"message": "Invaild ID"}, status=404)



@require_http_methods(["GET", "POST"])
def automobiles_list(request):
    if request.method == "GET":
        automobiles = AutomobileVO.objects.filter(sold=False)
        return JsonResponse(
            {"automobiles": automobiles},
            encoder=AutomobileVOEncoder,
            safe=False
        )


@require_http_methods({"GET", "POST"})
def sales_list(request):
    if request.method == "GET":
        sales = SaleRecord.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleRecordEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)

        try:
            salesperson_id = content["salesPerson"]
            salesperson = SalesPerson.objects.get(employee_id=salesperson_id)
            content["salesPerson"] = salesperson
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Invaild SalesPerson ID"},
                status=400
            )

        try:
            customer_id = content["customer"]
            customer = Customer.objects.get(id=customer_id)
            content["customer"] = customer
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "invaild customer id"},
                status=400
            )

        try:
            auto_vin = content["automobile"]
            automobile = AutomobileVO.objects.get(vin=auto_vin)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid automobile vin"},
                status=400
            )

        sale = SaleRecord.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleRecordEncoder,
            safe=False
        )


@require_http_methods(["GET", "DELETE"])
def sale_details(request, id):
    if request.method == "GET":
        sale = SaleRecord.objects.get(id=id)
        return JsonResponse(
            sale,
            encoder=SaleRecordEncoder,
            safe=False,
        )
    else:
        count, _ = SaleRecord.objects.filter(id=id).delete()
        return JsonResponse({"deleted sale": count > 0})
