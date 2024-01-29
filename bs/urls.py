from django.urls import path
from .views import base_views, question_views, answer_views, category_views
from . import views

app_name = 'bs'

urlpatterns = [
    # base_views.py
    # path('',
    #      base_views.index, name='index'),
    # path('<int:question_id>/',
    #      base_views.detail, name='detail'),

    path('category/welcome', category_views.welcome, name='welcome'),
    path('category/education', category_views.education, name='education'),
    path('category/offline', category_views.offline, name='offline'),
    path('category/way_to_come', category_views.way_to_come, name='way_to_come'),



    # question_views.py
    # path('question/create/',
    #      question_views.question_create, name='question_create'),
    # path('question/modify/<int:question_id>/',
    #      question_views.question_modify, name='question_modify'),
    # path('question/delete/<int:question_id>/',
    #      question_views.question_delete, name='question_delete'),
    # path('question/vote/<int:question_id>/', question_views.question_vote, name='question_vote'),
    #
    # # answer_views.py
    # path('answer/create/<int:question_id>/',
    #      answer_views.answer_create, name='answer_create'),
    # path('answer/modify/<int:answer_id>/',
    #      answer_views.answer_modify, name='answer_modify'),
    # path('answer/delete/<int:answer_id>/',
    #      answer_views.answer_delete, name='answer_delete'),
    # path('answer/vote/<int:answer_id>/', answer_views.answer_vote, name='answer_vote'),
]