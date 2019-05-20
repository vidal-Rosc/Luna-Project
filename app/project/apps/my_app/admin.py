from django.contrib import admin
from .models import Restaurant, Restaurant_review, ReviewLikes, Comments_on_reviews, CommentLikes, UserProfile

# Register your models here.
admin.site.register(Restaurant_review)
admin.site.register(ReviewLikes)
admin.site.register(Comments_on_reviews)
admin.site.register(CommentLikes)
admin.site.register(UserProfile)


@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    list_display = ["name", "average_rating"]
