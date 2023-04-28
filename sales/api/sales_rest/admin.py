from django.contrib import admin
from .models import SalesPerson, AutomobileVO, Customer, SaleRecord

admin.site.register(SalesPerson)
admin.site.register(AutomobileVO)
# admin.site.register(Customer)
admin.site.register(SaleRecord)
