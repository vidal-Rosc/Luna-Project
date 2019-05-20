from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView

from project.apps.my_app.models import Restaurant
from project.apps.my_app.permissions.permissions import RestaurantPatchDeletePutPermission
from project.apps.my_app.serializers.restaurantSerializer import RestaurantsSerializer


# GET: Get the list of all the restaurant.
class GetAllRestaurantsView(ListAPIView):
    serializer_class = RestaurantsSerializer
    queryset = Restaurant.objects.all()
    permission_classes = []
    authentication_classes = []


# POST: Create a new restaurant.
class CreateNewRestaurantView(CreateAPIView):
    serializer_class = RestaurantsSerializer

    def perform_create(self, serializer):
        serializer.save(restaurant_owner=self.request.user)


# GET - PUT/PATCH (UPDATE) - DELETE: Restaurant by id
class GetPostDeleteRestaurant(RetrieveUpdateDestroyAPIView):
    permission_classes = (RestaurantPatchDeletePutPermission,)
    serializer_class = RestaurantsSerializer
    queryset = Restaurant.objects.all()


# GET: Get the all the restaurants created by a specific user in chronological order.
class GetRestaurantByUserID(ListAPIView):
    serializer_class = RestaurantsSerializer
    permission_classes = []
    authentication_classes = []

    def get_queryset(self):
        user_id = self.kwargs.get("user_id")
        return Restaurant.objects.filter(restaurant_owner=user_id).order_by("-created")


# GET: Get the all the restaurants by category.
class GetRestaurantByOwnerID(ListAPIView):
    serializer_class = RestaurantsSerializer
    permission_classes = []
    authentication_classes = []

    def get_queryset(self):
        category = self.kwargs.get("category").title()
        return Restaurant.objects.filter(category=category)
