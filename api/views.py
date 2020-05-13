from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from api.models import Funds, daily_performance, weekly_performance
from api.serializers import FundSerializer, DailySerializer, WeeklySerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes

@csrf_exempt
@api_view(('GET',))
def funds_list(request):

    if request.method == 'GET':
        funds = Funds.objects.all()
        serializer = FundSerializer(funds, many=True)
        return Response(serializer.data)

@csrf_exempt
@api_view(('GET',))
def fund_detail(request, ISIN):
    try:
        fund = Funds.objects.get(ISIN=ISIN)
    except Funds.DoesNotExist:
        return Response(status=404)

    if request.method == 'GET':
        serializer = FundSerializer(fund)
        return Response(serializer.data)

@csrf_exempt
@api_view(('GET',))
def performance(request, ISIN):
    try:
        records = daily_performance.objects.filter(ISIN=ISIN)
        frequency = 'daily'
    except Funds.DoesNotExist:
        try:
            records = weekly_performance.objects.filter(ISIN=ISIN)
            frequency = 'weekly'
        except Funds.DoesNotExist:
            return Response(status=404)

    if request.method == 'GET':
        if frequency == 'daily':
            serializer = DailySerializer(records, many=True)
        else:
            serializer = WeeklySerializer(records, many=True)
        return Response(serializer.data)

