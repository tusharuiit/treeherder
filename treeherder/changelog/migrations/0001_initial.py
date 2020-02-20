# Generated by Django 3.0.2 on 2020-02-20 09:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Changelog',
            fields=[
                ('id', models.CharField(max_length=255, primary_key=True, serialize=False)),
                ('date', models.DateTimeField(db_index=True)),
                ('author', models.CharField(max_length=100)),
                ('owner', models.CharField(max_length=100)),
                ('project', models.CharField(max_length=100)),
                ('project_url', models.CharField(max_length=360)),
                ('message', models.CharField(max_length=360)),
                ('description', models.CharField(max_length=360)),
                ('type', models.CharField(max_length=100)),
                ('url', models.CharField(max_length=360)),
            ],
            options={
                'db_table': 'changelog_entry',
            },
        ),
        migrations.CreateModel(
            name='ChangelogFile',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.SlugField(max_length=255, unique=True)),
                ('changelog', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='files', to='changelog.Changelog')),
            ],
            options={
                'db_table': 'changelog_file',
            },
        ),
    ]