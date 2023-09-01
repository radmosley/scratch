from django.db import models

# Create your models here.
class Ingredient(models.Model):
    name = models.CharField(max_length=300)

class Recipe(models.Model):
    title = models.CharField(max_length=300)
    ingredients = models.ManyToManyField(Ingredient)
    directions = models.TextField(null=True, blank=True)