from __future__ import unicode_literals

from django.db import models
from django.utils import timezone


class Moim(models.Model):
    id = models.AutoField(primary_key=True, verbose_name='idx')
    author = models.ForeignKey('auth.User',on_delete=models.CASCADE)
    title = models.CharField(max_length=200,null=True, blank=True)
    text = models.TextField(null=True, blank=True)
    date = models.DateTimeField(null=True, blank=True)
    thumbnail = models.ImageField(u'썸네일', upload_to='%Y/%m/%d', blank=True, null=True)
    join_users = models.ManyToManyField('auth.User', verbose_name=u'참석', blank=True,
                                        related_name='join_moim')
    created_date = models.DateTimeField(
            default=timezone.now)

    def __str__(self):
        return self.title

    
class User(models.Model):
    id = models.AutoField(primary_key=True, verbose_name='idx')
    user_id = models.CharField(null=False, max_length=255, verbose_name='Login_id')
    password = models.CharField(null=False, max_length=255, verbose_name='Login_password')
    del_yn = models.CharField(null=False, max_length=2, verbose_name='삭제 여부', default='N')
    last_login = models.DateTimeField(null=True, blank=True, verbose_name='마지막 로그인 시간')
    last_logout = models.DateTimeField(null=True, blank=True, verbose_name='마지막 로그아웃 시간')
    created_date = models.DateTimeField(auto_now_add=True, verbose_name='생성 날짜')
    modify_date = models.DateTimeField(auto_now=True, verbose_name='수정 날짜')

    class Meta:
        # abstract = True
        managed = True
        db_table = 'user'
        # app_label = 'user'
        ordering = ['id', ]
        verbose_name_plural = 'User_Info'


class Session(models.Model):
    id = models.AutoField(primary_key=True, verbose_name='idx')
    user_id = models.CharField(null=False, max_length=255, verbose_name='Login_id')
    session_key = models.CharField(null=False, max_length=255, verbose_name='session_key')
    ip_address = models.CharField(null=False, max_length=20, verbose_name='IP주소')
    login_yn = models.CharField(null=True, blank=True, max_length=2, verbose_name='로그인 여부')
    detail_info = models.CharField(null=True, blank=True, max_length=255, verbose_name='세부사항')
    logout_date = models.DateTimeField(null=True, blank=True, verbose_name='로그아웃 시간')
    created_date = models.DateTimeField(auto_now_add=True, verbose_name='생성 날짜')

    class Meta:
        # abstract = True
        managed = True
        db_table = 'session'
        # app_label = 'session'
        ordering = ['id', ]
        verbose_name_plural = 'session_History'