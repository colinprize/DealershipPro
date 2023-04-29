from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    import_href = models.CharField(max_length=200)


class SalesPerson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(
        max_length=100,
    )

    def get_api_url(self):
        return reverse("sales_person", kwargs={"id": self.id})


class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.CharField(max_length=200, null=False)
    phone_number = models.CharField(max_length=12, null=False)


class SaleRecord(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.CASCADE,
    )

    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales_person",
        on_delete=models.CASCADE,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="customer",
        on_delete=models.CASCADE,
    )

    price = models.PositiveIntegerField(
    )
