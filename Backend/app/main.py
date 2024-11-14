from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.routers import products, users, sales


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
)


app.mount("/static", StaticFiles(directory="app/static"), name="static")


app.include_router(products.router)
app.include_router(users.router)
app.include_router(sales.router)


