from rest_framework import serializers

from project.apps.my_app.models import Restaurant


class RestaurantsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ["id", "name", "category", "street", "city", "zip", "website", "phone", "email", "opening_hours",
                  "price_level", "image", "restaurant_owner", "average_rating"]
        read_only_fields = ["id", "restaurant_owner"]
