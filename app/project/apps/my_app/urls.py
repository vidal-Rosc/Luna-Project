from django.urls import path

from project.apps.my_app.views.authViews import PasswordResetView, PasswordResetValidationView
from project.apps.my_app.views.categoryView import GetCategories
from project.apps.my_app.views.commentsView import UserComments, CreateReviewsComments, DeleteReviewsComments, \
    LikeOrUnLikeComment
from project.apps.my_app.views.homeView import HomeView
from project.apps.my_app.views.reViews import ReviewCreateView, ListReviewsSingleRestaurantView, \
    ListReviewsByUserView, \
    GetUpdateDeleteView, LikeOrNoLikeView, ListLikedReView, ListReviewsCommentViews, ListAllReviewRestaurant
from project.apps.my_app.views.registrationViews import RegistrationView, RegistrationValidationView
from project.apps.my_app.views.restaurantViews import GetRestaurantByOwnerID, GetRestaurantByUserID, \
    GetPostDeleteRestaurant, GetAllRestaurantsView, CreateNewRestaurantView
from project.apps.my_app.views.searchViews import SearchViews
from project.apps.my_app.views.userViews import MyUserProfile, ListUsers, GetAnyUserProfile, SearchUser

app_name = "my_app"

urlpatterns = [
    # Auth
    path('password-reset/', PasswordResetView.as_view(), name='password_reset'),
    path('password-reset/verify/', PasswordResetValidationView.as_view(), name='password_reset_verify'),

    # registration
    path('registration/', RegistrationView.as_view(), name='registration'),
    path('registration/validation/', RegistrationValidationView.as_view(), name='validate-registration'),

    # Search
    path("search/", SearchViews.as_view(), name="search"),

    # Home
    path("home/", HomeView.as_view(), name="home"),

    # Restaurant
    path("restaurants/", GetAllRestaurantsView.as_view(), name="get-list-of-all-restaurants"),
    path("restaurants/new/", CreateNewRestaurantView.as_view(), name="create-new-restaurant"),
    path("restaurants/category/<str:category>/", GetRestaurantByOwnerID.as_view(), name="get-restaurant-by-owner-id"),
    path("restaurants/user/<int:user_id>/", GetRestaurantByUserID.as_view(), name="get-restaurants-by-user-id"),
    path("restaurants/<int:pk>/", GetPostDeleteRestaurant.as_view(), name="get-post-delete-restaurant"),

    # Reviews
    path("reviews/restaurants/", ListAllReviewRestaurant.as_view(), name="list-of-all-reviews"),
    path("reviews/new/<int:pk>/", ReviewCreateView.as_view(), name="create-new-review"),
    path("reviews/restaurant/<int:pk>/", ListReviewsSingleRestaurantView.as_view(), name="list-of-reviews"),
    path("reviews/user/<int:pk>/", ListReviewsByUserView.as_view(), name="list-of-reviews-by-user"),
    path("reviews/<int:pk>/", GetUpdateDeleteView.as_view(), name="get-update-delete-reviews"),
    path("reviews/like/<int:pk>/", LikeOrNoLikeView.as_view(), name="liked-or-not-liked"),
    path("reviews/likes/", ListLikedReView.as_view(), name="list-all-reviews-liked"),
    path("reviews/comments/", ListReviewsCommentViews.as_view(), name="list-all-reviews-commented"),

    # Comments
    path('review/comment/<int:pk>/', UserComments.as_view(), name='user-search'),
    path('review/comment/new/<int:pk>/', CreateReviewsComments.as_view(), name='user-search'),
    path('review/comment/delete/<int:pk>/', DeleteReviewsComments.as_view(), name='user-search'),
    path('review/comment/like/<int:pk>/', LikeOrUnLikeComment.as_view(), name='user-search'),

    # Categories
    path('category/list/', GetCategories.as_view(), name='get-restaurants-by-category'),

    # Users
    path('me/', MyUserProfile.as_view(), name='my-profile'),
    path('users/list/', ListUsers.as_view(), name='users-list'),
    path('users/<int:pk>/', GetAnyUserProfile.as_view(), name='specific-user'),
    path('users/', SearchUser.as_view(), name='user-search'),

]
