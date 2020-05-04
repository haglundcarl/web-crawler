from ..models import Article
from rest_framework import viewsets
from .serializers import ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    """
    Django-rest-framework set up for our ArticleViewSet
    """
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
