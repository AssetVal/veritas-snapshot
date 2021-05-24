import Uppy from '@uppy/core';
import XHRUpload from '@uppy/xhr-upload';
import ImageEditor from '@uppy/image-editor';
import type {photoCategoryIDs} from '../_data/exteriorPhotoCategories';
import type Order from '../../../../classes/Order';
import Webcam from '@uppy/webcam';

let uppyInstanceCount: number = 0;


const incrementInterior = () => uppyInstanceCount++

export default function uppyInstance(maxPhotos: number, order: Order, imageCategory: photoCategoryIDs|'None' = 'None'): Uppy.Uppy<Uppy.StrictTypes> {
  const intExt: string = (maxPhotos > 1) ? 'interior' : 'exterior';

  const uppy: Uppy.Uppy<Uppy.StrictTypes> = Uppy<Uppy.StrictTypes>({
    autoProceed: false,
    // Create separate ID's so Uppy can use local storage easier
    id: (imageCategory === 'None') ? `InteriorPhotos${incrementInterior()}` : imageCategory,
    // @ts-ignore - Uppys "Strict Typescript" mode doesn't like me setting new metadata this way (but it works)
    onBeforeFileAdded(currentFile) {
      if (currentFile.name.length > 5 && imageCategory !== 'None'){ // Return a new object, so we don't mutate the original
        return { // Reduce file name, so the mobile phone users can easily see the edit button
          ...currentFile,
          meta: {
            originalName: currentFile.name,
          },
          name: imageCategory,
        }
      } else {
        return currentFile;
      }
    },
    onBeforeUpload(files){
      if (imageCategory === 'None') return files;
      const updatedFiles = {}
      Object.keys(files).forEach(fileID => {
        updatedFiles[fileID] = {
          ...files[fileID], // @ts-ignore
          name: files[fileID].meta.originalName,
        }
      })
      return updatedFiles
    },
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
      cropSquare: false,
      cropWidescreen: false,
      cropWidescreenVertical: false,
    }
  });

  return uppy;
}
