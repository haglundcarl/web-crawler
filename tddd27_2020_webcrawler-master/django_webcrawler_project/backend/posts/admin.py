from django.contrib import admin
from .models import Post

# Registrate the post model on the admin page
admin.site.register(Post)
