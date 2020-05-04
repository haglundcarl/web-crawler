from rest_framework import serializers
from ..models import Post


class PostSerializer(serializers.ModelSerializer):
    """
    Automatically creates a serializer with the same fields as the model
    """
    class Meta:
        model = Post
        fields = '__all__'


class UserPostSerializer(serializers.ModelSerializer):
    """
    Automatically creates a serializer with the same fields as the model
    """
    user_id = serializers.IntegerField(default=0)

    class Meta:
        model = Post
        fields = '__all__'
