from rest_framework_mongoengine import serializers

from api.models import Funds, daily_performance, weekly_performance

class FundSerializer(serializers.DocumentSerializer):
    class Meta:
        model = Funds
        fields = '__all__'

class DailySerializer(serializers.DocumentSerializer):
    class Meta:
        model = daily_performance
        fields = '__all__'

class WeeklySerializer(serializers.DocumentSerializer):
    class Meta:
        model = weekly_performance
        fields = '__all__'
