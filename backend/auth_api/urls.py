from django.urls import path
from .views import RegisterView, LoginView, VerifyEmailView

urlpatterns = [
    path("register/", RegisterView.as_view()),
    path("login/", LoginView.as_view()),
    path("verify/<uuid:token>/", VerifyEmailView.as_view()),
]
