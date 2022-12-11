import { FlexRow, FlexCol, Img } from "Components/Shared";
import first from "assets/first.jpg";
import second from "assets/second.jpg";
import third from "assets/third.jpg";

const cats = [first, second, third];

export default function CatPhotoGallery() {
  return (
    <FlexRow
      width="100%"
      padding="25px 0 0 0"
      height="auto"
      alignItems="center"
      gap="25px"
      justifyContent="center"
      flexWrap="wrap"
    >
      {cats.map((cat, index) => (
        <FlexCol
          borderRadius="25px"
          width="auto"
          maxWidth="300px"
          color="white"
          textAlign="center"
          background="#364d79"
          alignItems="center"
          justifyContent="center"
        >
          <Img
            src={cat}
            alt={`cat-${index}`}
            width={undefined}
            objectFit="scale-down"
            borderRadius="25px"
          />
        </FlexCol>
      ))}
    </FlexRow>
  );
}
