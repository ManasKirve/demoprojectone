
from fastapi import APIRouter
from app.models import Sale
from typing import List

router = APIRouter()


sales_data = [
    Sale(product="Product 1", qty_sold=150, total_amount=1500),
    Sale(product="Product 2", qty_sold=200, total_amount=3000),
    Sale(product="Product 3", qty_sold=180, total_amount=2000),
 
]

@router.get("/sales", response_model=List[Sale])
def get_sales():
    return sales_data
