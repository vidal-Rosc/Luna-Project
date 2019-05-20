from django.conf import settings
from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django_countries.fields import CountryField

from .helpers import generate_code


# Restaurant creation model


class Restaurant(models.Model):
    name = models.TextField(
        verbose_name='name',
        max_length=150,
    )
    MEATLOVERS = "Meatlovers"
    WINGS = "Wings"
    ITALIAN = "Italian"
    CHINESE = "Chinese"
    FRENCH = "French"
    category = models.CharField(
        verbose_name='category',
        max_length=150,
        choices=(
            (MEATLOVERS, MEATLOVERS),
            (WINGS, WINGS),
            (ITALIAN, ITALIAN),
            (CHINESE, CHINESE),
            (FRENCH, FRENCH)
        )
    )
    street = models.TextField(
        verbose_name='street',
        max_length=255,
    )
    city = models.TextField(
        verbose_name='city',
        max_length=150,
    )
    zip = models.CharField(
        verbose_name='zip',
        max_length=50,
        blank=True,
        null=True,
    )
    country = CountryField(blank_label='(select country)')
    website = models.TextField(
        verbose_name='website',
        max_length=150,
        blank=True,
        null=True,
    )
    phone = models.CharField(
        verbose_name='phone',
        max_length=50,
    )
    email = models.TextField(
        verbose_name='email',
        max_length=150,
        blank=True,
        null=True,
    )
    opening_hours = models.TextField(
        verbose_name='opening_hours',
        max_length=150,
        blank=True,
        null=True,
    )
    price_level = models.TextField(
        verbose_name='price_level',
        max_length=100,
        blank=True,
        null=True,
    )
    image = models.ImageField(
        verbose_name='image',
        blank=True,
        null=True,
    )

    restaurant_owner = models.ForeignKey(
        verbose_name='restaurant_owner',
        related_name='owned_restaurants',
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    created = models.DateTimeField(auto_now=True)
    updated = models.DateTimeField(auto_now_add=True)

    # This method should be the default value for "average_rating", not working yet
    @property
    def average_rating(self):
        reviews = self.reviews.all()
        if reviews:
            return sum(review.rating for review in reviews) / len(reviews)
        return 0

    def __str__(self):
        return f"ID: {self.id} - {self.name}"

    class Meta:
        ordering = ['-created']


# restaurant reviews creation model

class Restaurant_review(models.Model):
    restaurant_review = models.ForeignKey(
        verbose_name='restaurant_review',
        related_name='reviews',
        to='my_app.Restaurant',
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    text_content = models.TextField(
        verbose_name='text_content',
        max_length=255,
    )
    date_created = models.DateTimeField(
        verbose_name='date_created',
        auto_now=True,
    )
    date_modified = models.DateTimeField(
        verbose_name='date_modified',
        auto_now_add=True,
    )
    rating = models.IntegerField(
        verbose_name='rating',
        default=0
    )
    review_owner = models.ForeignKey(
        verbose_name='review_owner',
        related_name='created_reviews',
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return f"ID: {self.id} - {self.text_content} by {self.review_owner}"


# restaurant reviews likes creation model

class ReviewLikes(models.Model):
    user = models.ForeignKey(
        verbose_name='user',
        related_name='review_likes',
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )
    review = models.ForeignKey(
        verbose_name='review_likes',
        related_name='likes',
        to='my_app.Restaurant_review',
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )

    def __str__(self):
        return f"Like from user {self.user_id}"


# restaurant reviews comment creation model

class Comments_on_reviews(models.Model):
    text_content = models.TextField(
        verbose_name='text_content',
        max_length=255,
    )
    date_created = models.DateTimeField(
        verbose_name='date_created',
        auto_now=True,
    )
    date_modified = models.DateTimeField(
        verbose_name='date_modified',
        auto_now_add=True,
    )
    comment_owner = models.ForeignKey(
        verbose_name='comment_owner',
        related_name='comments',
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    restaurant_review = models.ForeignKey(
        verbose_name='restaurant_review',
        related_name='comments_on_review',
        to='Restaurant_review',
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return f"ID: {self.id} - {self.text_content} by {self.comment_owner}"


# restaurant reviews comments likes creation model

class CommentLikes(models.Model):
    comment_like_owner = models.ForeignKey(
        verbose_name='comment_like_owner',
        related_name='likes',
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    comment_like = models.ForeignKey(
        verbose_name='comment_like',
        related_name='liked_comment',
        to='my_app.Comments_on_reviews',
        on_delete=models.CASCADE,
        blank=True,
        null=True,
    )

    def __str__(self):
        return f"Like from user {self.comment_like_owner}"


# User profile creation model (automatic when user get created)

class UserProfile(models.Model):
    image = models.ImageField(
        verbose_name='image',
        blank=True,
        null=True,
    )
    location = models.TextField(
        verbose_name='location',
        max_length=100,
        blank=True,
        null=True,
    )
    user = models.OneToOneField(
        verbose_name='user',
        related_name='user_profile',
        to=settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    description = models.TextField(
        verbose_name='description',
        max_length=255,
        blank=True,
        null=True,
    )
    things_i_love = models.TextField(
        verbose_name='things_i_love',
        max_length=255,
        blank=True,
        null=True,
    )
    phone = models.CharField(
        verbose_name='phone',
        max_length=50,
        blank=True,
        null=True,
    )
    code = models.CharField(
        verbose_name='code',
        max_length=255,
        default=generate_code,
    )

    def generate_new_code(self):
        self.code = generate_code()
        self.save()
        return self.code

    def __str__(self):
        return f"Userprofile from user {self.user_id}"

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, **kwargs):
        profile, created = UserProfile.objects.get_or_create(user=instance)
        if created:
            profile.save()
