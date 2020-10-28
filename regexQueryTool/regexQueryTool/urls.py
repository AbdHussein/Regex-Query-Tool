
from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from regexTool import views

urlpatterns = [
    path('', include('frontend.urls')),
    url('regex/', views.RegexApiView.as_view())
]
