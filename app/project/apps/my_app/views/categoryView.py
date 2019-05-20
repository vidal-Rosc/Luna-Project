from rest_framework.response import Response
from rest_framework.generics import GenericAPIView


# GET: Get the list of all the categories.
class GetCategories(GenericAPIView):
    permission_classes = []
    authentication_classes = []

    def get(self, *args, **kwargs):
        choices = ["Meatlovers", "Wings", "Italian", "Chinese", "French"]
        return Response(str(choices))
