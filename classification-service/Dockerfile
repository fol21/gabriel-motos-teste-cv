FROM python:3.9-slim-bullseye

WORKDIR /app

# Install dependencies:
COPY ./env/requirements.txt .
RUN python -m pip install -r requirements.txt

# Run the application:
COPY ./models/ ./models
COPY ./env/src/ ./src
COPY ./classes.json .
COPY ./env/app.py .

EXPOSE 5100
CMD ["python", "app.py"]