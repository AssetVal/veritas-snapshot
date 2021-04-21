import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import { toast } from '@zerodevx/svelte-toast'

export default function uppyInstance(maxPhotos: number, orderID: string, imageCategory: string){
  const intExt = (maxPhotos > 1) ? 'interior' : 'exterior';

  // @ts-ignore
  const uppy =  new Uppy({
    autoProceed: true,
    restrictions: {
      maxFileSize: 10000000,
      maxNumberOfFiles: maxPhotos,
      allowedFileTypes: ['image/*']
    }}).use(XHRUpload, {
      endpoint: `https://www.assetval.club/api/snapshotUpload/${orderID}/${intExt}/${imageCategory}`,
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
        const veritasResponse: { message: string } = exteriorPhoto.response.body;
        toast.push(veritasResponse.message)
      }
    }
  });

  return uppy;
}
