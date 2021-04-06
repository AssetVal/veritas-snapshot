import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';

export default function uppyInstance(orderID: string, imageCategory: string){
  // @ts-ignore
  return new Uppy({
    autoProceed: true,
    restrictions: {
      maxFileSize: 10000000,
      maxNumberOfFiles: 1,
      allowedFileTypes: ['image/*']
    }}).use(XHRUpload, {
      endpoint: `https://www.assetval.club/api/snapshotUpload/${orderID}/exterior${imageCategory}`,
      formData: true,
      fieldName: 'file',
      bundle: true,
  });
}
