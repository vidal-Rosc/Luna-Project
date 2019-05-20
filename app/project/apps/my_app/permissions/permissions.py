from rest_framework.permissions import BasePermission


class RestaurantPatchDeletePutPermission(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method == "PATCH" or request.method == "DELETE":
            if request.user == obj.restaurant_owner or request.user.is_staff:
                return True
        elif request.method == "GET":
            return True
        return False
