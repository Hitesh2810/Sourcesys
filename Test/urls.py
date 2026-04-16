from django.urls import path
from .views import LeadListCreate, LeadDetail

urlpatterns = [
    path('leads/', LeadListCreate.as_view()),
    path('leads/<int:pk>/', LeadDetail.as_view()),
]