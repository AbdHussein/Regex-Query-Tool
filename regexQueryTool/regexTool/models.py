from django.db import models


class Regex(models.Model):
    name = models.CharField(max_length=200)
    text = models.CharField(max_length=200, default='null')
    expression = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
