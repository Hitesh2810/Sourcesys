from django.urls import path
from .views import (
    home,
    LeadListCreate,
    LeadRetrieveUpdateDestroy,
    LeadList,
    LeadCreate
)

urlpatterns = [
    path('', home),

    path('leads/', LeadListCreate.as_view()),
    path('leads/<int:pk>/', LeadRetrieveUpdateDestroy.as_view()),

    # extra endpoints
    path('leads-list/', LeadList.as_view()),
    path('leads-create/', LeadCreate.as_view()),
]