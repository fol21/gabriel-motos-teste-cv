import tensorflow as tf
from flask import Flask

app = Flask(__name__)

@app.route("/")
def tensorflow_version():
    return tf.version.VERSION

if __name__ == '__main__':
   app.run('localhost', 3000, debug=True)