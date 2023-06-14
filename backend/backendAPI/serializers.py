from rest_framework import serializers
from .models import Note
from django.contrib.auth.models import User

class Noteserializer(serializers.ModelSerializer) :
    class Meta :
        model = Note
        fields = '__all__'

class SigninSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length=50, min_length=6)
    password = serializers.CharField(max_length=150, write_only=True)
    first_name = serializers.CharField(max_length=150)
    last_name = serializers.CharField(max_length=150)
    email = serializers.EmailField(max_length=1500)
    class Meta:
        model = User
        fields = ('username', 'password' , 'last_name' , 'first_name' , 'email')

    def validate(self, args):
        username = args.get('username', None)
        if User.objects.filter(username=username).exists():
            raise serializers.ValidationError({'username': ('username already exists')})
        return super().validate(args)
    
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)