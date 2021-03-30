import Uppy from '@uppy/core';

export default function uppyInstance(){
  // @ts-ignore
  return new Uppy({
    autoProceed: true,
    restrictions: {
      maxFileSize: 10000000,
      maxNumberOfFiles: 1,
      allowedFileTypes: ['image/*']
    }});
}
