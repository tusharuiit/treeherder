# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-09-26 21:21
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('model', '0009_add_manager_to_push_and_job'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='runnablejob',
            unique_together=set([]),
        ),
        migrations.RemoveField(
            model_name='runnablejob',
            name='build_platform',
        ),
        migrations.RemoveField(
            model_name='runnablejob',
            name='job_group',
        ),
        migrations.RemoveField(
            model_name='runnablejob',
            name='job_type',
        ),
        migrations.RemoveField(
            model_name='runnablejob',
            name='machine_platform',
        ),
        migrations.RemoveField(
            model_name='runnablejob',
            name='repository',
        ),
        migrations.DeleteModel(
            name='RunnableJob',
        ),
    ]
