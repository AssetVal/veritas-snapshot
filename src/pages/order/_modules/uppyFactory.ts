import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import ImageEditor from '@uppy/image-editor';
import type Order from '../../../../classes/Order';
import type {photoCategoryIDs} from '../_data/exteriorPhotoCategories';

export default function uppyInstance(maxPhotos: number, order: Order, imageCategory: photoCategoryIDs): Uppy.Uppy<Uppy.StrictTypes> {
  const intExt = (maxPhotos > 1) ? 'interior' : 'exterior';

  const uppy: Uppy.Uppy<Uppy.StrictTypes> = Uppy<Uppy.StrictTypes>({
    autoProceed: false, // Automatically upload when the photo is chosen
    id: imageCategory, // Create separate ID's so Uppy can use local storage easier
    onBeforeFileAdded(currentFile, files) {
      if (currentFile.name.length > 5){
        return { // Reduce file name so the mobile phone users can easily see the edit button
          ...currentFile,
          name: currentFile.name.substr(0, 5)
        }
      } else {
        return currentFile;
      }
    },
    restrictions: {
      maxFileSize: 100000000,
      maxNumberOfFiles: maxPhotos,
      allowedFileTypes: ['image/*']
    }});

  uppy.use(XHRUpload, {
    endpoint: `https://www.assetval.club/api/snapshotUpload/${order._id}/${intExt}/${imageCategory}`,
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
      cropSquare: true,
      cropWidescreen: false,
      cropWidescreenVertical: false,
    }
  });

  return uppy;
}
