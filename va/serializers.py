from rest_framework import fields, serializers
# Register serializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from va.models import UserAccount


class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ('id', 'email', 'password', 'first_name', 'address')
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def create(self, validated_data):
        user = UserAccount.objects.create_user(validated_data['email'],     password=validated_data['password'],
                                               first_name=validated_data['first_name'], address=validated_data['address'])
        return user


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        refresh = self.get_token(self.user)
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        # Add extra responses here
        data['id'] = self.user.id
        data['email'] = self.user.email
        data['name'] = self.user.first_name
        return data


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = '__all__'


class UserEditSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ['address']


class UserEditNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ['first_name']


class UserEditEmailSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ['email']


class ChangePasswordSerializer(serializers.Serializer):
    model = UserAccount

    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)
