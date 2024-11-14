
from fastapi import APIRouter, Query
from app.models import User
from typing import List

router = APIRouter()


users = [
    User(id=i, name=f"User {i}", mobile=f"123-456-78{i}", email=f"user{i}@example.com") for i in range(1, 101)
]

@router.get("/users", response_model=List[User])
def get_users(skip: int = Query(0, ge=0), limit: int = Query(15, ge=1)):
    return users[skip: skip + limit]

