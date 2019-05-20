from rest_framework.generics import ListAPIView

from project.apps.my_app.models import Restaurant
from project.apps.my_app.serializers.restaurantSerializer import RestaurantsSerializer


class HomeView(ListAPIView):
    serializer_class = RestaurantsSerializer
    queryset = Restaurant.objects.all()
    permission_classes = []
    authentication_classes = []

    def get_queryset(self):
        restaurants = Restaurant.objects.all()

        top_rated_restaurants = sorted(restaurants, key=lambda restaurant: restaurant.average_rating, reverse=True)[:4]

        return top_rated_restaurants
