from rest_framework import serializers

from project.apps.my_app.models import Restaurant_review


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant_review
        fields = ['id', 'restaurant_review', 'text_content', 'review_owner', 'likes', 'date_created', 'rating']
        depth = 1
