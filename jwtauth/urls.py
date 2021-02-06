from django.urls import path
from .views import ObtainTokenPairWithColorView, TodoView
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('token/obtain/', ObtainTokenPairWithColorView.as_view(), name='token_create'),  # override sjwt stock token
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('',TodoView.as_view(), name='todoview')
]