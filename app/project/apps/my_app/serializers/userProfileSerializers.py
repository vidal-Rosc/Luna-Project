from rest_framework import serializers

from project.apps.my_app.models import UserProfile
from project.apps.my_app.serializers.userSerializers import UserSerializer


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = UserProfile
        fields = ['id', 'image', 'location', 'user', 'description', 'things_i_love', 'phone', 'code']
        read_only_fields = ['user', 'code']
