# Generated by Django 3.1.12 on 2021-07-03 18:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('va', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='like',
        ),
    ]
