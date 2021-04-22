import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import { toast } from '@zerodevx/svelte-toast';
import toastThemes from '../../../_modules/toastThemes';
import type Order from '../../../../classes/Order';
import type {photoCategoryIDs} from '../_data/exteriorPhotoCategories';

interface VeritasResponse {
  message: string,
  status: 'success'|'error',
  href: string|Array<string>
}

export default function uppyInstance(maxPhotos: number, order: Order, imageCategory: photoCategoryIDs){
  const intExt = (maxPhotos > 1) ? 'interior' : 'exterior';

  // @ts-ignore
  const uppy =  new Uppy({
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

  uppy.on('complete', async(result): Promise<void> => {
    console.log('successful files:', result.successful);
    console.log('failed files:', result.failed);

    if (result.successful.length > 0){
      if (result.successful.length === 1){ // Exterior Photo
        const exteriorPhoto = result.successful[0];
        const {status, message, href}: VeritasResponse = exteriorPhoto.response.body;

        if (status === 'success'){
          toast.push(message, toastThemes.success);
          order.photos.exteriorFiles = [...order.photos.exteriorFiles, {name: href as string, category: imageCategory}]
        } else if (status === 'error') {
          toast.push(message, toastThemes.error)
        } else {
          toast.push(message)
        }
      }
    }
  });

  return uppy;
}
