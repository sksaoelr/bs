from django.core.paginator import Paginator
from django.shortcuts import render, get_object_or_404

def welcome(request):
    # main_context = get_object_or_404()
    context = {'welcome': ''}
    return render(request, 'bs/category/welcome.html', context)

