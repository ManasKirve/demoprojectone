from typing import List
from fastapi import APIRouter
from app.models import Product

router = APIRouter()


products = [
    Product(id=1, title="Orange Nike Air One", description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price=10.99, image="/static/pexels-richard-taveira-426027508-17825340.jpg"),
    Product(id=2, title="Clear White Nike Air One", description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price=12.99, image="/static/pexels-hamza01nsr-12628402.jpg"),
    Product(id=3, title="Blue White Nike Air One", description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.", price=12.99, image="/static/pexels-rafael-quaty-37077235-13236696.jpg"),
]

@router.get("/products", response_model=List[Product])
def get_products():
    return products

