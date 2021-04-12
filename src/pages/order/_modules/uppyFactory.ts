import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';

export default function uppyInstance(maxPhotos: number, orderID: string, imageCategory: string){
  const intExt = (maxPhotos > 1) ? 'interior' : 'exterior';

  // @ts-ignore
  return new Uppy({
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
}
