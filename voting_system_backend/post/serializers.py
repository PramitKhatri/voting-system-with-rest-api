from rest_framework import serializers
from .models import *

class PostSerializer(serializers.ModelSerializer):
    poster=serializers.ReadOnlyField(source='poster.username')  #username is defined by the User in model
    poster_id=serializers.ReadOnlyField(source='poster.id')
    votes=serializers.SerializerMethodField() # SerializerMethodField is for when its is not in models and only in serializer
    class Meta:
        model=Post
        fields=['id','title','url','poster','created_at','poster_id','votes']

    def get_votes(self,post):
        return Vote.objects.filter(post=post).count()


class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model=Vote
        fields=['id']
