from django.shortcuts import render
from .serializer import TodoSerializer
from .models import Todo
from rest_framework.generics import ListCreateAPIView, UpdateAPIView, DestroyAPIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_400_BAD_REQUEST


class TodoView(ListCreateAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class TodoUpdateView(UpdateAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

class TodoDeleteView(DestroyAPIView):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()