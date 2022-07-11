import json
import numpy as np

from tensorflow import version
from keras.models import load_model
from keras.optimizers.optimizer_v2.adam import Adam
from keras.losses import SparseCategoricalCrossentropy
from keras.utils.vis_utils import plot_model
# from keras.callbacks import ModelCheckpointfrom 
from flask import Flask, request

from src.utils import decode_base64, get_predicition

app = Flask(__name__)

model_dir = f'./model/B3'
model = load_model(f'{model_dir}/model_v1')
# plot_model(model, to_file=f'{model_dir}/model.png', show_shapes=True, show_layer_names=True)
# model.compile(optimizer=Adam(learning_rate=1e-3), loss=SparseCategoricalCrossentropy(), metrics=['accuracy'])

class_indices = None
with open(f'./classes.json', 'r') as f:
    class_indices = json.loads(f.read())

@app.route("/")
def tensorflow_version():
    return version.VERSION

@app.route("/description")
def model_description():
    return model.to_json()


@app.route('/post_json', methods=['POST'])
def process_json():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        return json
    else:
        return 'Content-Type not supported!'


@app.route("/predict", methods=['POST'])
def model_predict():
    content_type = request.headers.get('Content-Type')
    body = None
    if (content_type == 'application/json'):
        body = request.json
    img = decode_base64(body['base64'], transpose=True)
    return get_predicition(img, model, class_indices)

if __name__ == '__main__':
   app.run('0.0.0.0', 5100, debug=True)


