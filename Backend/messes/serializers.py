from rest_framework import serializers
from .models import Mess, Menu


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = "__all__"
        read_only_fields = ("id", "mess")


class MessSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mess
        fields = [
            "id",
            "name",
            "address",
            "location",
            "food_type",
            "monthly_price",
            "meals_included",
            "image",
        ]