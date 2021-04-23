import Uppy from '@uppy/core';
import Dashboard from '@uppy/dashboard';
import XHRUpload from '@uppy/xhr-upload';
import ImageEditor from '@uppy/image-editor';
import type Order from '../../../../classes/Order';
import type {photoCategoryIDs} from '../_data/exteriorPhotoCategories';

export interface VeritasResponse {
  message: string,
  status: 'success'|'error',
  href: string|Array<string>
}

export default function uppyInstance(maxPhotos: number, order: Order, imageCategory: photoCategoryIDs){
  const intExt = (maxPhotos > 1) ? 'interior' : 'exterior';

  // @ts-ignore
  const uppy = new Uppy({
    autoProceed: false,
    restrictions: {
      maxFileSize: 10000000,
      maxNumberOfFiles: maxPhotos,
      allowedFileTypes: ['image/*']
    }}).use(XHRUpload, {
      endpoint: `https://www.assetval.club/api/snapshotUpload/${order._id}/${intExt}/${imageCategory}`,
      formData: true,
      fieldName: 'files',
      bundle: true,
  });

  uppy.use(ImageEditor, {quality: 0.8})

  return uppy;
}
