from django.contrib import admin
from .models import Page

# ユーザー名：admin-user
# メールアドレス：admin@example.com
# パスワード：adminuser


@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    readonly_fields = ["id", "created_at", "updated_at"]
