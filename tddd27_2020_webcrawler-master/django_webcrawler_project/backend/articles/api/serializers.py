from rest_framework import serializers
from ..models import Article
from rest_auth.registration.serializers import RegisterSerializer


class ArticleSerializer(serializers.ModelSerializer):
    """
    Automatically creates a serializer with the same fields as the model
    """
    class Meta:
        model = Article
        fields = '__all__'


class RegistrationSerializer(RegisterSerializer):
    """
    Replaces the rest-auth user-registration-serializer with added fields
    """
    first_name = serializers.CharField(required=True)
    last_name = serializers.CharField(required=True)

    def get_cleaned_data(self):
        return {
            'first_name': self.validated_data.get('first_name', ''),
            'last_name': self.validated_data.get('last_name', ''),
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', '')
        }
