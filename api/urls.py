from django.urls import path
from api import views

urlpatterns = [
    path('funds/', views.funds_list),
    path('funds/<str:ISIN>/', views.fund_detail),
    path('funds/<str:ISIN>/performance', views.performance)
]