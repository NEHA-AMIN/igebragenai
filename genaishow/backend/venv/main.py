from fastapi import FastAPI

app = FastAPI()

@app.get("/profile/{username}")
def get_profile(username: str):
    # Mock data for demonstration
    profiles = {
        "Chandru": {
            "username": "Chandru",
            "email": "chandru@example.com",
            "profile_photo": "/images/chandru.jpg",
            "badges": ["AI Enthusiast", "GenAI Participant"],
        },
    }
    return profiles.get(username, {})
