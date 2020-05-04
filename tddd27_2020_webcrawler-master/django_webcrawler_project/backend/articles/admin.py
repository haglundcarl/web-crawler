from django.contrib import admin
from .models import Article


# Registrate the article model on the admin page
admin.site.register(Article)
