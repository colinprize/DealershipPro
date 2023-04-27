from django.db import models

# Create your models here.
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)

    def __str__(self):
        return self.vin


class Technician(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    employee_id = models.CharField(max_length=50)

class Appointment(models.Model):
    date_time = models.DateTimeField()
    reason = models.CharField(max_length=300)
    status = models.CharField(max_length=30, default="BOOKED")
    vin = models.CharField(max_length=17)
    is_vip = models.BooleanField(default=False, null=True, blank=True)
    customer = models.CharField(max_length=100)
    technician = models.ForeignKey(
        Technician,
        related_name = "appointment",
        on_delete = models.PROTECT,
    )

    def cancel(self):
        self.status = "CANCELLED"
        self.save()

    def finish(self):
        self.status = "FINISHED"
        self.save()
