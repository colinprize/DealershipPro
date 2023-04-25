import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# Import models from service_rest, here.
# from service_rest.models import Something
from service_rest.models import AutomobileVO

def get_automobiles():
    response = requests.get("http://localhost:8100/api/automobiles/")
    content = json.loads(response.content)
    for autos in content["autos"]:
        AutomobileVO.objects.update_or_create(
            import_href = autos["href"],
            defaults = {"vin": autos["vin"]}
        )

def poll():
    while True:
        print('Service poller polling for data')
        try:
            get_automobiles()
            pass
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
