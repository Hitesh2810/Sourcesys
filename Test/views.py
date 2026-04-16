from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import Lead
from .serializers import LeadSerializer

class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer


class LeadDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

def home(request):
    return HttpResponse("My Self Hitesh Successfully Created My First Django Project")