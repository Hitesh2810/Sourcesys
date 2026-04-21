from rest_framework import generics
from .models import Lead
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from .serializers import LeadSerializer, UserSerializer
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

class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer