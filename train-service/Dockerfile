FROM python:3.9-slim-bullseye

WORKDIR /app

# Install dependencies:
COPY ./env/requirements.txt .
RUN python -m pip install -r requirements.txt

# Run the application:
COPY ./env/src .
COPY ./env/app.py .
CMD ["python", "app.py"]