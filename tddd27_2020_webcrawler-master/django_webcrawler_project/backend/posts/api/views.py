from ..models import Post
from rest_framework import viewsets
from .serializers import PostSerializer, UserPostSerializer
from django.contrib.auth import get_user_model
from django.conf import settings


class PostViewSet(viewsets.ModelViewSet):
    """
    Django-rest-framework set up for our ArticleViewSet
    """
    serializer_class = PostSerializer
    queryset = Post.objects.all()


class UserPostViewSet(viewsets.ModelViewSet):
    """
    Django-rest-framework set up for our ArticleViewSet
    """
    serializer_class = UserPostSerializer
    queryset = Post.objects.filter(creator=9)
