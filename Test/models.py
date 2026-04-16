from django.db import models

class Lead(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    business_unit = models.CharField(max_length=100)

    def __str__(self):
        return self.name