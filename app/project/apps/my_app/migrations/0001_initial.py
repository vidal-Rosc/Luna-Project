# Generated by Django 2.1.7 on 2019-04-03 06:55

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import project.apps.my_app.helpers


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='CommentLikes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment_like_owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to=settings.AUTH_USER_MODEL, verbose_name='comment_like_owner')),
            ],
        ),
        migrations.CreateModel(
            name='Comments_on_reviews',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text_content', models.TextField(max_length=255, verbose_name='text_content')),
                ('date_created', models.DateTimeField(auto_now=True, verbose_name='date_created')),
                ('date_modified', models.DateTimeField(auto_now_add=True, verbose_name='date_modified')),
                ('comment_likes', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='liked_comment', to='my_app.CommentLikes', verbose_name='comment_likes')),
                ('comment_owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to=settings.AUTH_USER_MODEL, verbose_name='comment_owner')),
            ],
        ),
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.TextField(max_length=150, verbose_name='name')),
                ('category', models.TextField(max_length=150, verbose_name='category')),
                ('street', models.TextField(max_length=255, verbose_name='street')),
                ('city', models.TextField(max_length=150, verbose_name='city')),
                ('zip', models.CharField(blank=True, max_length=50, null=True, verbose_name='zip')),
                ('website', models.TextField(blank=True, max_length=150, null=True, verbose_name='website')),
                ('phone', models.CharField(max_length=50, verbose_name='category')),
                ('email', models.TextField(blank=True, max_length=150, null=True, verbose_name='email')),
                ('opening_hours', models.TextField(blank=True, max_length=150, null=True, verbose_name='opening_hours')),
                ('price_level', models.TextField(blank=True, max_length=100, null=True, verbose_name='price_level')),
                ('image', models.ImageField(blank=True, null=True, upload_to='', verbose_name='image')),
                ('created', models.DateTimeField(auto_now=True)),
                ('updated', models.DateTimeField(auto_now_add=True)),
                ('restaurant_owner', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='owned_restaurants', to=settings.AUTH_USER_MODEL, verbose_name='restaurant_owner')),
            ],
            options={
                'ordering': ['-created'],
            },
        ),
        migrations.CreateModel(
            name='Restaurant_review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text_content', models.TextField(max_length=255, verbose_name='text_content')),
                ('date_created', models.DateTimeField(auto_now=True, verbose_name='date_created')),
                ('date_modified', models.DateTimeField(auto_now_add=True, verbose_name='date_modified')),
            ],
        ),
        migrations.CreateModel(
            name='ReviewLikes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='review_likes', to=settings.AUTH_USER_MODEL, verbose_name='user')),
            ],
        ),
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(blank=True, null=True, upload_to='', verbose_name='image')),
                ('location', models.TextField(blank=True, max_length=100, null=True, verbose_name='location')),
                ('description', models.TextField(blank=True, max_length=255, null=True, verbose_name='description')),
                ('things_i_love', models.TextField(blank=True, max_length=255, null=True, verbose_name='things_i_love')),
                ('phone', models.CharField(blank=True, max_length=50, null=True, verbose_name='phone')),
                ('code', models.CharField(default=project.apps.my_app.helpers.generate_code, max_length=255, verbose_name='code')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='user_profile', to=settings.AUTH_USER_MODEL, verbose_name='user')),
            ],
        ),
        migrations.AddField(
            model_name='restaurant_review',
            name='review_likes',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='restaurant_review_likes', to='my_app.ReviewLikes', verbose_name='review_likes'),
        ),
        migrations.AddField(
            model_name='restaurant_review',
            name='review_owner',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='created_reviews', to=settings.AUTH_USER_MODEL, verbose_name='review_owner'),
        ),
        migrations.AddField(
            model_name='restaurant',
            name='restaurant_reviews',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='restaurant', to='my_app.Restaurant_review', verbose_name='restaurant_reviews'),
        ),
        migrations.AddField(
            model_name='comments_on_reviews',
            name='restaurant_review',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments_on_review', to='my_app.Restaurant_review', verbose_name='restaurant_review'),
        ),
    ]
