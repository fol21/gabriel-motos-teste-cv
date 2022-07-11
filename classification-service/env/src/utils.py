
import os
import shutil
import json
import base64
import io
import numpy as np
from PIL import Image
from tensorflow import expand_dims

def decode_base64(im_base64, transpose=False):
    base64_decoded = base64.b64decode(im_base64)
    image = Image.open(io.BytesIO(base64_decoded))
    if transpose:
        image = image.transpose(Image.ROTATE_90)
    return np.array(image)

def get_predicition(img, model, class_indices):
  res = {}
  res['predictions'] = {}
  res['best'] = None
  _max = -1

  _preds = model.predict(expand_dims(img, 0))[0]
  for item in class_indices.items():
    res['predictions'][item[0]] =  str(_preds[item[1]])
    if(_max <  _preds[item[1]]):
      _max = _preds[item[1]]
      res['best'] =  item[0]
  
  return res

def download_model(url, model_path, override=False):
  if override:
    shutil.rmtree(f'{model_path}')
    