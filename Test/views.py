from rest_framework import generics
from .models import Lead
from .serializers import LeadSerializer
from django.http import HttpResponse


def home(request):
    return HttpResponse("LeadHub API is working 🚀")

class LeadListCreate(generics.ListCreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
class LeadRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

class LeadList(generics.ListAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
class LeadCreate(generics.CreateAPIView):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer