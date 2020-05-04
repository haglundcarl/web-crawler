from django.urls import path, include
from .views import ArticleViewSet
from rest_framework.routers import DefaultRouter

"""
Wires our ViewSets to the URL articles
"""
router = DefaultRouter()
router.register('articles', ArticleViewSet, basename='articles')
urlpatterns = router.urls
