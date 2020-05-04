from django.urls import path, include
from .views import PostViewSet, UserPostViewSet
from rest_framework.routers import DefaultRouter

"""
Wires our ViewSets to the URL articles
"""
router = DefaultRouter()
router.register('posts', PostViewSet, basename='posts')
router.register('userposts', UserPostViewSet, basename='userposts')
urlpatterns = router.urls
