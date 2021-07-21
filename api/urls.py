from django.conf.urls import url
from .views import *


urlpatterns = [
    url(r'^v1/moim/$', MoimListView.as_view(), name='moim'),
    url(r'^v1/user$', UserView.as_view(), name='user'),
    url(r'^v1/sign$', SignView.as_view(), name='sign'),
]
