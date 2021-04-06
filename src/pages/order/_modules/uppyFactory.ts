import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';

export default function uppyInstance(suffix: string){
  // @ts-ignore
  return new Uppy({
    autoProceed: true,
    restrictions: {
      maxFileSize: 10000000,
      maxNumberOfFiles: 1,
      allowedFileTypes: ['image/*']
    }}).use(XHRUpload, {
      endpoint: `http://192.168.245.108:5000/externalAPI/${suffix}`,
      formData: true,
      fieldName: 'file',
      bundle: true,
  });
}
