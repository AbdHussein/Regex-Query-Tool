# Generated by Django 3.1.2 on 2020-10-26 19:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('regexTool', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='regex',
            name='text',
            field=models.CharField(default='null', max_length=200),
        ),
    ]
