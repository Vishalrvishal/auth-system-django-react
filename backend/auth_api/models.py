from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid


class User(AbstractUser):
    ROLE_CHOICES = (
        ("ADMIN", "Admin"),
        ("COMMANDER", "Base Commander"),
        ("LOGISTICS", "Logistics Officer"),
    )

    email = models.EmailField(unique=True)

    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default="COMMANDER"   # ✅ DEFAULT ROLE
    )

    is_verified = models.BooleanField(default=False)

    verification_token = models.UUIDField(
        default=uuid.uuid4,
        editable=False,
        unique=True
    )

    def __str__(self):
        return f"{self.username} ({self.role})"
