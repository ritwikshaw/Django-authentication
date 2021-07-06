
from django.urls import path

from .views import (
    RegisterApi,
    GetUserView,
    MyTokenObtainPairView,
    UserUpdateView,
    UserDeleteView,
    UserNameUpdateView,
    UserEmailUpdateView,
    ChangePasswordView
)

urlpatterns = [
    path('register/', RegisterApi.as_view()),
    path('login/', MyTokenObtainPairView.as_view()),
    path('getuser/<pk>', GetUserView.as_view()),
    path('user-update/<pk>', UserUpdateView.as_view()),
    path('user-name-update/<pk>', UserNameUpdateView.as_view()),
    path('user-email-update/<pk>', UserEmailUpdateView.as_view()),
    path('change-password/', ChangePasswordView.as_view(), name='change-password'),
    path('user-delete/<pk>', UserDeleteView.as_view()),

]
