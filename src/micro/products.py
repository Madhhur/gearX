from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import List
from pydantic import BaseModel
import psycopg2

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Product(BaseModel):
    id: str
    name: str
    price: float
    originalPrice: float
    image: str
    rating: float
    reviews: int
    brand: str
    category: str

DB_HOST = "gearx.cdweoys0ewfv.ap-south-1.rds.amazonaws.com"
DB_PORT = "5432"
DB_NAME = "postgres"
DB_USER = "postgres"
DB_PASSWORD = "TAwpePqL5vM40Uzy9sUM"

def get_db_connection():
    conn = psycopg2.connect(
        host=DB_HOST,
        port=DB_PORT,
        database=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD
    )
    return conn
####### mobiles
@app.get("/mobiles", response_model=List[Product])
async def get_laptops():
    conn = get_db_connection()  # your function to connect to PostgreSQL
    cursor = conn.cursor()

    cursor.execute("""
        SELECT id, name, price, original_price, image, rating, reviews, brand, category
        FROM mobiles
    """)
    
    rows = cursor.fetchall()  # <--- fetch all rows from the query

    # Map the database rows to your Product model
    result = [
        {
            "id": row[0],
            "name": row[1],
            "price": row[2],
            "originalPrice": row[3],  # map original_price to originalPrice
            "image": row[4],
            "rating": row[5],
            "reviews": row[6],
            "brand": row[7],
            "category": row[8]
        }
        for row in rows
    ]

    cursor.close()
    conn.close()
    
    return result






#########################laptop###########################

@app.get("/laptops", response_model=List[Product])
async def get_laptops():
    conn = get_db_connection()  # your function to connect to PostgreSQL
    cursor = conn.cursor()

    cursor.execute("""
        SELECT id, name, price, original_price, image, rating, reviews, brand, category
        FROM laptops
    """)
    
    rows = cursor.fetchall()  # <--- fetch all rows from the query

    # Map the database rows to your Product model
    result = [
        {
            "id": row[0],
            "name": row[1],
            "price": row[2],
            "originalPrice": row[3],  # map original_price to originalPrice
            "image": row[4],
            "rating": row[5],
            "reviews": row[6],
            "brand": row[7],
            "category": row[8]
        }
        for row in rows
    ]

    cursor.close()
    conn.close()
    
    return result



#########################air_conditioners###########################

@app.get("/air-conditioners", response_model=List[Product])
async def get_laptops():
    conn = get_db_connection()  # your function to connect to PostgreSQL
    cursor = conn.cursor()

    cursor.execute("""
        SELECT id, name, price, original_price, image, rating, reviews, brand, category
        FROM air_conditioners
    """)
    
    rows = cursor.fetchall()  # <--- fetch all rows from the query

    # Map the database rows to your Product model
    result = [
        {
            "id": row[0],
            "name": row[1],
            "price": row[2],
            "originalPrice": row[3],  # map original_price to originalPrice
            "image": row[4],
            "rating": row[5],
            "reviews": row[6],
            "brand": row[7],
            "category": row[8]
        }
        for row in rows
    ]

    cursor.close()
    conn.close()
    
    return result

#############
#########################fridges###########################

@app.get("/fridges", response_model=List[Product])
async def get_laptops():
    conn = get_db_connection()  # your function to connect to PostgreSQL
    cursor = conn.cursor()

    cursor.execute("""
        SELECT id, name, price, original_price, image, rating, reviews, brand, category
        FROM fridges
    """)
    
    rows = cursor.fetchall()  # <--- fetch all rows from the query

    # Map the database rows to your Product model
    result = [
        {
            "id": row[0],
            "name": row[1],
            "price": row[2],
            "originalPrice": row[3],  # map original_price to originalPrice
            "image": row[4],
            "rating": row[5],
            "reviews": row[6],
            "brand": row[7],
            "category": row[8]
        }
        for row in rows
    ]

    cursor.close()
    conn.close()
    
    return result

#############
#########################routers###########################

@app.get("/routers", response_model=List[Product])
async def get_laptops():
    conn = get_db_connection()  # your function to connect to PostgreSQL
    cursor = conn.cursor()

    cursor.execute("""
        SELECT id, name, price, original_price, image, rating, reviews, brand, category
        FROM routers
    """)
    
    rows = cursor.fetchall()  # <--- fetch all rows from the query

    # Map the database rows to your Product model
    result = [
        {
            "id": row[0],
            "name": row[1],
            "price": row[2],
            "originalPrice": row[3],  # map original_price to originalPrice
            "image": row[4],
            "rating": row[5],
            "reviews": row[6],
            "brand": row[7],
            "category": row[8]
        }
        for row in rows
    ]

    cursor.close()
    conn.close()
    
    return result


#############
#########################televisions###########################

@app.get("/televisions", response_model=List[Product])
async def get_laptops():
    conn = get_db_connection()  # your function to connect to PostgreSQL
    cursor = conn.cursor()

    cursor.execute("""
        SELECT id, name, price, original_price, image, rating, reviews, brand, category
        FROM televisions
    """)
    
    rows = cursor.fetchall()  # <--- fetch all rows from the query

    # Map the database rows to your Product model
    result = [
        {
            "id": row[0],
            "name": row[1],
            "price": row[2],
            "originalPrice": row[3],  # map original_price to originalPrice
            "image": row[4],
            "rating": row[5],
            "reviews": row[6],
            "brand": row[7],
            "category": row[8]
        }
        for row in rows
    ]

    cursor.close()
    conn.close()
    
    return result



#############
#########################watches###########################

@app.get("/watches", response_model=List[Product])
async def get_laptops():
    conn = get_db_connection()  # your function to connect to PostgreSQL
    cursor = conn.cursor()

    cursor.execute("""
        SELECT id, name, price, original_price, image, rating, reviews, brand, category
        FROM watches
    """)
    
    rows = cursor.fetchall()  # <--- fetch all rows from the query

    # Map the database rows to your Product model
    result = [
        {
            "id": row[0],
            "name": row[1],
            "price": row[2],
            "originalPrice": row[3],  # map original_price to originalPrice
            "image": row[4],
            "rating": row[5],
            "reviews": row[6],
            "brand": row[7],
            "category": row[8]
        }
        for row in rows
    ]

    cursor.close()
    conn.close()
    
    return result



#############
#########################washing_machines###########################

@app.get("/washing-machines", response_model=List[Product])
async def get_laptops():
    conn = get_db_connection()  # your function to connect to PostgreSQL
    cursor = conn.cursor()

    cursor.execute("""
        SELECT id, name, price, original_price, image, rating, reviews, brand, category
        FROM washing_machines
    """)
    
    rows = cursor.fetchall()  # <--- fetch all rows from the query

    # Map the database rows to your Product model
    result = [
        {
            "id": row[0],
            "name": row[1],
            "price": row[2],
            "originalPrice": row[3],  # map original_price to originalPrice
            "image": row[4],
            "rating": row[5],
            "reviews": row[6],
            "brand": row[7],
            "category": row[8]
        }
        for row in rows
    ]

    cursor.close()
    conn.close()
    
    return result
