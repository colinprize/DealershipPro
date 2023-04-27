from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(null=True)


class SalesPerson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(
        max_length=100,
        unique=True,
        null=False
    )

    def get_api_url(self):
        return reverse("salesperson", kwargs={"id": self.id})


class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.CharField(max_length=200, null=False)
    phone_number = models.CharField(max_length=12, null=False)


class SaleRecord(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="salerecords",
        on_delete=models.PROTECT,
    )

    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="salerecords",
        on_delete=models.PROTECT,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="salerecords",
        on_delete=models.PROTECT,
    )

    price = models.DecimalField(
        null=False,
        default=0.00,
        max_digits=15,
        decimal_places=2,
    )
