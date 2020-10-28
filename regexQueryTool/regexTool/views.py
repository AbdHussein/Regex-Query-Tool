from rest_framework import viewsets, permissions
from .serializers import *
from .models import *
from rest_framework.response import Response
from rest_framework.views import APIView
import re
import json


class RegexApiView(APIView):
    def post(self, request):
        result = re.match(request.data['expression'], request.data['text'])
        if result:
            return Response({"status": "Query String Is Valid", "result": str(result.group())})
        else:
            return Response({"status": "Query String Is Invalid", "result": "No Result"})

    def get(self, request):
        allRegex = Regex.objects.all()
        return Response({"result": allRegex})
