import type {photoCategoryIDs} from '../_data/exteriorPhotoCategories';
import type Order from '../../../../classes/Order';
import ImageEditor from '@uppy/image-editor';
import XHRUpload from '@uppy/xhr-upload';
import Webcam from '@uppy/webcam';
import Uppy from '@uppy/core';
import {v4 as uuid} from 'uuid'

const createUppyInstance = (maxPhotos: number, url: string) => {
  const uppy: Uppy.Uppy<Uppy.StrictTypes> = Uppy<Uppy.StrictTypes>({
    autoProceed: false,
    // Create separate ID's so Uppy can use local storage easier
    id: uuid(),
    restrictions: {
      maxFileSize: 100000000,
      maxNumberOfFiles: maxPhotos,
      allowedFileTypes: ['image/*']
    }});

  uppy.use(Webcam, {
    modes: ['picture'],
    mirror: false,
    videoConstraints: {
      facingMode: 'environment'
    }
  })

  uppy.use(XHRUpload, {
    endpoint: `https://www.assetval.club/api/${url}`,
    formData: true,
    fieldName: 'files',
    bundle: true,
  });

  uppy.use(ImageEditor, {
    target: '#EditorModal',
    quality: 0.8,
    actions: {
      revert: true,
      rotate: true,
      flip: true,
      zoomIn: true,
      zoomOut: true,
      cropSquare: false,
      cropWidescreen: false,
      cropWidescreenVertical: false,
    }
  });

  return uppy;
}

export const exteriorUppyInstance = (order: Order, category: photoCategoryIDs) => createUppyInstance((category === 'addendum') ? 200 : 1, `snapshotExteriorUpload/${order._id}/${category}`);
export const interiorUppyInstance = (order: Order) => createUppyInstance(200, `snapshotInteriorUpload/${order._id}`);