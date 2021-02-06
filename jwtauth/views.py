from django.shortcuts import render

from .serializers import MyTokenObtainPairSerializer,TodoSerializers
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Todo
from rest_framework.permissions import AllowAny, IsAuthenticated
# Create your views here.
class ObtainTokenPairWithColorView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class TodoView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        todo = Todo.objects.all()
        serializer = TodoSerializers(todo, many=True, context={"request": request})
        return Response(serializer.data)

    def post(self, request):
        serializer = TodoSerializers(data=request.data)

        if serializer.is_valid():
            serializer.save()

        todo = Todo.objects.all()

        serializer = TodoSerializers(todo, many=True, context={"request": request})
        return Response(serializer.data)
