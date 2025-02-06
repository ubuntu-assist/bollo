import React, { useCallback, useState } from 'react'
import Cropper from 'react-cropper'
import { X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react'

interface ImageEditorModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  onSave: (croppedImage: string) => void
}

const ImageEditorModal: React.FC<ImageEditorModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  onSave,
}) => {
  const [cropper, setCropper] = useState<any>()
  const [zoom, setZoom] = useState(0)
  const [rotation, setRotation] = useState(0)

  const handleZoomIn = () => {
    if (cropper && zoom < 3) {
      const newZoom = zoom + 0.1
      cropper.zoomTo(newZoom)
      setZoom(newZoom)
    }
  }

  const handleZoomOut = () => {
    if (cropper && zoom > -3) {
      const newZoom = zoom - 0.1
      cropper.zoomTo(newZoom)
      setZoom(newZoom)
    }
  }

  const handleRotate = () => {
    if (cropper) {
      const newRotation = rotation + 90
      cropper.rotateTo(newRotation)
      setRotation(newRotation)
    }
  }

  const handleSave = useCallback(() => {
    if (cropper) {
      const croppedCanvas = cropper.getCroppedCanvas({
        width: 400,
        height: 400,
      })
      const croppedImage = croppedCanvas.toDataURL()
      onSave(croppedImage)
      onClose()
    }
  }, [cropper, onSave, onClose])

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div className='relative w-full max-w-2xl rounded-lg bg-white p-6'>
        {/* Header */}
        <div className='mb-4 flex items-center justify-between'>
          <h3 className='text-lg font-semibold'>Edit profile picture</h3>
          <button
            onClick={onClose}
            className='rounded-full p-1 hover:bg-gray-100'
          >
            <X className='h-5 w-5' />
          </button>
        </div>

        {/* Cropper */}
        <div className='relative h-96 overflow-hidden rounded-lg'>
          <Cropper
            src={imageUrl}
            style={{ height: '100%', width: '100%' }}
            aspectRatio={1}
            guides={true}
            viewMode={1}
            dragMode='move'
            scalable={false}
            onInitialized={(instance) => setCropper(instance)}
          />
        </div>

        {/* Controls */}
        <div className='mt-4 flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <button
              onClick={handleZoomOut}
              className='rounded-full p-2 hover:bg-gray-100'
              title='Zoom out'
            >
              <ZoomOut className='h-5 w-5' />
            </button>
            <button
              onClick={handleZoomIn}
              className='rounded-full p-2 hover:bg-gray-100'
              title='Zoom in'
            >
              <ZoomIn className='h-5 w-5' />
            </button>
            <button
              onClick={handleRotate}
              className='rounded-full p-2 hover:bg-gray-100'
              title='Rotate'
            >
              <RotateCcw className='h-5 w-5' />
            </button>
          </div>
          <div className='flex gap-3'>
            <button
              onClick={onClose}
              className='rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-100'
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className='rounded-lg bg-b300 px-4 py-2 text-sm font-medium text-white hover:bg-b300/90'
            >
              Set new profile picture
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageEditorModal
