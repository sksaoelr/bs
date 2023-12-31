from django.contrib import admin
from django.urls import path, include
from bs.views import base_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('bs/', include('bs.urls')),
    path('common/', include('common.urls')),
    # path('', base_views.index, name='index'),  # '/' 에 해당되는 path
    path('', base_views.main, name='main'), # '/' 에 해당되는 path
]

handler404 = 'common.views.page_not_found'