import { FlexCol, Span } from "Components/Shared";
import CatPhotoGallery from "./CatPhotoGallery";
import { DefaultColors } from "consts";

export default function Content() {
  return (
    <FlexCol
      width="100%"
      height="100%"
      padding="25px 0 0 0"
      overflowY="auto"
      alignItems="center"
      gap="25px"
      justifyContent="flex-start"
      background={DefaultColors.BACKGROUND}
    >
      <Span fontSize="25px" width="auto">
        Do you like this cat?
      </Span>
      <CatPhotoGallery />
    </FlexCol>
  );
}
