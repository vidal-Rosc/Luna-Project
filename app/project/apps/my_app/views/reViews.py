from rest_framework.generics import CreateAPIView, ListAPIView, GenericAPIView, RetrieveUpdateDestroyAPIView, \
    RetrieveAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from project.apps.my_app.serializers.reviewSerializers import ReviewSerializer
from project.apps.my_app.models import Restaurant_review, ReviewLikes


# /Create new review for a restaurant.
class ReviewCreateView(CreateAPIView):
    serializer_class = ReviewSerializer
    queryset = Restaurant_review.objects.all()


# /Get the list of the reviews for a single restaurant.
class ListReviewsSingleRestaurantView(RetrieveAPIView):
    serializer_class = ReviewSerializer
    queryset = Restaurant_review.objects.all()
    permission_classes = []
    authentication_classes = []


# /Get the list of the reviews by a single user.
class ListReviewsByUserView(ListAPIView):
    serializer_class = ReviewSerializer
    permission_classes = []
    authentication_classes = []

    def get_queryset(self):
        return Restaurant_review.objects.filter(review_owner=self.request.user)


# Get/Update/Delete a specific review by ID and display all the information.
class GetUpdateDeleteView(GenericAPIView):
    queryset = Restaurant_review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [
        IsAuthenticated
    ]

    def get(self, request, **kwargs):
        post = self.get_object()
        serializer = self.get_serializer(post)
        return Response(serializer.data)

    def post(self, request, **kwargs):
        post = self.get_object()
        serializer = self.get_serializer(post, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def delete(self, request, **kwargs):
        post = self.get_object()
        post.delete()
        return Response('Goodbye Review :)')


# Like and Remove a Like  from the review
class LikeOrNoLikeView(RetrieveUpdateDestroyAPIView):
    serializer_class = ReviewSerializer
    queryset = Restaurant_review.objects.all()

    def post(self, request, pk, **kwargs):
        self.get_object()
        like, created = ReviewLikes.objects.get_or_create(user=request.user)
        return Response('Liked')

    def delete(self, request, *args, **kwargs):
        self.get_object()
        try:
            like, created = ReviewLikes.objects.get(user=request.user).delete()
        except ReviewLikes.DoesNotExist:
            return Response({'you cant be a  bitch twice'}, 400)
        return Response(':(')


# /Get the list of the reviews the current user liked.
class ListLikedReView(ListAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        return Restaurant_review.objects.filter(likes__user=self.request.user)


# / Get the list of the reviews the current user commented.
class ListReviewsCommentViews(ListAPIView):
    serializer_class = ReviewSerializer

    def get_queryset(self):
        return Restaurant_review.objects.filter(comments_on_review__comment_owner=self.request.user)


# /Get the list of all the Restaurant Reviews
class ListAllReviewRestaurant(ListAPIView):
    serializer_class = ReviewSerializer
    queryset = Restaurant_review.objects.all()
    permission_classes = []
    authentication_classes = []
