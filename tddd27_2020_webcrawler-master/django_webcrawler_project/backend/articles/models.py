from django.db import models


class Article(models.Model):
    """
    Creates a model Article with chosen fields
    """
    title = models.CharField(max_length=100)
    content = models.TextField(max_length=100)
    likes = models.IntegerField(default=0)

    def __str__(self):
        return self.title
