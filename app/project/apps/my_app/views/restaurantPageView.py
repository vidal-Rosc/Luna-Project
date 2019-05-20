from rest_framework.generics import ListAPIView, CreateAPIView

from project.apps.my_app.models import Restaurant
from project.apps.my_app.serializers.restaurantPageSerializer import GetAllRestaurantsSerializer, \
    CreateNewRestaurantSerializer


class GetAllRestaurantsView(ListAPIView):
    serializer_class = GetAllRestaurantsSerializer
    queryset = Restaurant.objects.all()


class CreateNewRestaurantView(CreateAPIView):
    serializer_class = CreateNewRestaurantSerializer

    def perform_create(self, serializer):
        serializer.save(restaurant_owner=self.request.user)
