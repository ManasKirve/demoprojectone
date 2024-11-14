# backend/app/models.py
from pydantic import BaseModel
from typing import List

class Product(BaseModel):
    id: int
    title: str
    description: str
    price: float
    image: str

class User(BaseModel):
    id: int
    name: str
    mobile: str
    email: str

class Sale(BaseModel):
    product: str
    qty_sold: int
    total_amount: float
