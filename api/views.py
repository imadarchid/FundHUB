from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from api.models import Funds, daily_performance, weekly_performance
from api.serializers import FundSerializer, DailySerializer, WeeklySerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes, parser_classes

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
@parser_classes((JSONParser,)) 
@api_view(('GET', 'POST'))
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

    elif request.method == 'POST':

        date_from = request.data.get('date_from')
        date_to = request.data.get('date_to')

        if frequency == 'daily':
            records = daily_performance.objects.filter(ISIN=ISIN, DATE__gte=date_from, DATE__lte=date_to)
            serializer = DailySerializer(records, many=True)
        else:
            records = weekly_performance.objects.filter(ISIN=ISIN, DATE__gte=date_from, DATE__lte=date_to)
            serializer = WeeklySerializer(records, many=True)
        return Response(serializer.data)

@csrf_exempt
@parser_classes((JSONParser,)) 
@api_view(('GET',))
def stats(request):
    fund_count = Funds.objects.count()

    return Response({"funds": fund_count})
