from django.db import models
from django.conf import settings


class Post(models.Model):
    """
    Creates a model Post with chosen fields
    """

    creator = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    # creator = models.ForeignKey(
    #     User, on_delete=models.CASCADE, max_length=100, default=None)
    title = models.CharField(max_length=100)
    email_address = models.EmailField(max_length=100)
    email_content = models.TextField(max_length=4000)
    user_content = models.TextField(max_length=2000)
    likes = models.IntegerField(default=0)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
