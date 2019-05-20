from rest_framework import serializers
from project.apps.my_app.models import Comments_on_reviews
from project.apps.my_app.serializers.reviewSerializers import ReviewSerializer


class CommentsSerializer(serializers.ModelSerializer):
    restaurant_review = ReviewSerializer(read_only=True)

    # comment_owner = UserSerializer(read_only=True)
    # comment_likes = serializers.SerializerMethodField()

    # def get_comment_likes_count(self, post):
    # return Comments_on_reviews.comment_likes.all().count()

    class Meta:
        model = Comments_on_reviews
        fields = ['id', 'text_content', 'date_created', 'date_modified', 'comment_owner', 'restaurant_review',
                  'comment_likes']
        read_only_fields = ['id', 'date_created', 'comment_likes', 'date_modified']
