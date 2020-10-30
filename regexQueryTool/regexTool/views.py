from rest_framework import viewsets, permissions
from .serializers import *
from .models import *
from rest_framework.response import Response
from rest_framework.views import APIView
import re
import json


class RegexApiView(APIView):
    def post(self, request):
        ex = re.compile(request.data['expression'],
                        re.M & re.L & re.I & re.S & re.X)
        result = ex.match(request.data['text'])
        if bool(result):
            return Response({"status": "Query String Is Valid", "result": str(result.group())})
        else:
            return Response({"status": "Query String Is Invalid", "result": str(result)})

    def get(self, request):
        allRegex = Regex.objects.all()
        return Response({"result": allRegex})
