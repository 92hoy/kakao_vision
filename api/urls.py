from django.conf.urls import url

from .views import MoimListView

urlpatterns = [
    url(r'^moim/$', MoimListView.as_view(), name='moim'),
]



# # from ba.views import MeetingView as MeetingView
# urlpatterns = [
#     url(r'^v1/user$', UserView.as_view()),
#     url(r'^v1/sign$', SignView.as_view()),
# ]