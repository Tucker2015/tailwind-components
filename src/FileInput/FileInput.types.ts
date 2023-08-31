export interface FileInputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick?: () => void;
  previewImage?: string | null;
}
