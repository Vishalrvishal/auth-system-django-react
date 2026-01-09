from django.contrib import admin
from .models import User


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = (
        "username",
        "email",
        "role",
        "is_verified",
        "verification_link",
        "is_staff",
    )

    list_filter = ("role", "is_verified", "is_staff")
    search_fields = ("username", "email")
    readonly_fields = ("verification_link",)

    def verification_link(self, obj):
        if obj.is_verified:
            return "Verified"
        return f"http://127.0.0.1:8000/verify/{obj.verification_token}/"

    verification_link.short_description = "Verification Link"
