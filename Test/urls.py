from django.urls import path
from .views import *

urlpatterns = [
    path('', home),

    path('leads/', LeadListCreate.as_view()),
    
    path('leads/<int:pk>/', LeadRetrieveUpdateDestroy.as_view()),

    path('register/', UserCreate.as_view()),
    path('leads-list/', LeadList.as_view()),
    path('leads-create/', LeadCreate.as_view()),
]