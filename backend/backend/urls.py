from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),   # ✅ Admin page
    path("", include("auth_api.urls")), # ✅ Your app URLs
]
