from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    image = models.TextField(null=True, blank=True)
    link = models.TextField(null=True, blank=True)
    rating = models.FloatField(default=0.0, null=True, blank=True)
    likes = models.IntegerField(default=0, null=True, blank=True)

    def __str__(self):
        return self.name