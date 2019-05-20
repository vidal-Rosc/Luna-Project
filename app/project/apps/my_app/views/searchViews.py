
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from project.apps.my_app.models import Restaurant, Restaurant_review
from project.apps.my_app.serializers.authSerializers import User
from project.apps.my_app.serializers.restaurantSerializer import RestaurantsSerializer
from project.apps.my_app.serializers.reviewSerializers import ReviewSerializer
from project.apps.my_app.serializers.userSerializers import UserSerializer


class SearchViews(GenericAPIView):
    permission_classes = []
    authentication_classes = []

    def post(self, *args, **kwargs):
        type = self.request.data.get('type').lower()
        search_string = self.request.query_params.get('search')
        if type == 'restaurant':
            return Response(RestaurantsSerializer(Restaurant.objects.filter(name__icontains=search_string),
                                                  many=True).data)
        elif type == 'user':
            return Response(UserSerializer(User.objects.filter(username__icontains=search_string), many=True).data)
        elif type == 'review':
            return Response(ReviewSerializer(Restaurant_review.objects.filter(text_content__icontains=search_string),
                                             many=True).data)
        else:
            return Response(':)')
