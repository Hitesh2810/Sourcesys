from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return HttpResponse("My Self Hitesh Successfully Created My First Django Project")