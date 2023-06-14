from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
    path('all/',views.getdata , name='all'),
    path('userdata/' , views.userfeed , name='userfeed') ,
    path('user/',views.userdeetails , name='details'),
    path('signup/',views.signup,name='signup'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
