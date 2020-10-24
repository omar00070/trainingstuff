from django.urls import path
from .views import TodoView, TodoUpdateView, TodoDeleteView

urlpatterns = [
    path('', TodoView.as_view()),
    path('<pk>/', TodoUpdateView.as_view()),
    path('delete/<pk>/', TodoDeleteView.as_view())
]
