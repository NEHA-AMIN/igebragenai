from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/profile/{username}")
def get_profile(username: str):
    profiles = {
        "Chandru": {
            "username": "Chandru",
            "email": "chandru@example.com",
            "profile_photo": "/images/chandru.jpg",
            "badges": ["AI Enthusiast", "GenAI Participant"],
        },
    }
    return profiles.get(username, {})
