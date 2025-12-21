from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken

from .models import User


# =========================
# REGISTER
# =========================
class RegisterView(APIView):
    def post(self, request):
        username = request.data.get("username")
        email = request.data.get("email")
        password = request.data.get("password")

        if not username or not email or not password:
            return Response(
                {"error": "All fields required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already exists"}, status=400)

        user = User.objects.create(
            username=username,
            email=email,
            is_active=True,        # IMPORTANT
            is_verified=False
        )
        user.set_password(password)
        user.save()

        # 🔗 verification link
        verify_url = f"http://127.0.0.1:8000/verify/{user.verification_token}/"

        # For now: print in terminal
        print("VERIFY LINK:", verify_url)

        return Response(
            {"message": "Registered successfully. Check verification link."},
            status=status.HTTP_201_CREATED
        )


# =========================
# VERIFY EMAIL  ✅ STEP 2
# =========================

class VerifyEmailView(APIView):
    def get(self, request, token):
        try:
            user = User.objects.get(verification_token=token)
        except User.DoesNotExist:
            return Response(
                {"error": "Invalid or expired token"},
                status=status.HTTP_400_BAD_REQUEST
            )

        if user.is_verified:
            return Response(
                {"message": "Email already verified"},
                status=status.HTTP_200_OK
            )

        user.is_verified = True
        user.save()

        return Response(
            {"message": "Email verified successfully"},
            status=status.HTTP_200_OK
        )



# =========================
# LOGIN
# =========================
class LoginView(APIView):
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        # 1️⃣ Validate input
        if not username or not password:
            return Response(
                {"error": "Username and password required"},
                status=status.HTTP_400_BAD_REQUEST
            )

        # 2️⃣ Authenticate user
        user = authenticate(username=username, password=password)

        if user is None:
            return Response(
                {"error": "Invalid credentials"},
                status=status.HTTP_401_UNAUTHORIZED
            )

        # 3️⃣ Check email verification
        if not user.is_verified:
            return Response(
                {"error": "Email not verified"},
                status=status.HTTP_403_FORBIDDEN
            )

        # 4️⃣ Generate JWT tokens
        refresh = RefreshToken.for_user(user)

        # 5️⃣ SUCCESS RESPONSE (IMPORTANT)
        return Response(
            {
                "message": "Login successful",
                "user": {
                    "id": user.id,
                    "username": user.username,
                    "email": user.email,
                },
                "access": str(refresh.access_token),
                "refresh": str(refresh),
            },
            status=status.HTTP_200_OK
        )


