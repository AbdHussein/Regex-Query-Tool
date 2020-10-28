from rest_framework import serializers
from .models import Regex


class RegexSerializer(serializers.ModelSerializer):
    class Meta:
        model = Regex
        fields = '__all__'
