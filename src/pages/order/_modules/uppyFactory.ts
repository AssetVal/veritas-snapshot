import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
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
  return new Uppy({
    autoProceed: true,
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
}
