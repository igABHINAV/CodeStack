# Generated by Django 4.2.1 on 2023-06-14 07:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backendAPI', '0002_note_code_snippet'),
    ]

    operations = [
        migrations.AddField(
            model_name='note',
            name='title',
            field=models.CharField(default='', max_length=1000),
        ),
    ]
