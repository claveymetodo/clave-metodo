import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { removeBackground, loadImage } from '@/utils/backgroundRemoval';

const BackgroundRemover = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedImage, setProcessedImage] = useState<string | null>(null);

  const processHeartIcon = async () => {
    setIsProcessing(true);
    try {
      // Load the heart icon
      const response = await fetch('/favicon-heart.png');
      const blob = await response.blob();
      const imageElement = await loadImage(blob);
      
      // Remove background
      const processedBlob = await removeBackground(imageElement);
      
      // Create download URL
      const url = URL.createObjectURL(processedBlob);
      setProcessedImage(url);
      
      // Create a link to download the processed image
      const link = document.createElement('a');
      link.href = url;
      link.download = 'favicon-heart-transparent.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Error processing image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Background Remover</h3>
      <Button 
        onClick={processHeartIcon}
        disabled={isProcessing}
        className="mb-4"
      >
        {isProcessing ? 'Processing...' : 'Remove Background from Heart Icon'}
      </Button>
      
      {processedImage && (
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">Processed image (transparent background):</p>
          <img src={processedImage} alt="Processed heart icon" className="w-16 h-16 border border-gray-200" />
        </div>
      )}
    </div>
  );
};

export default BackgroundRemover;