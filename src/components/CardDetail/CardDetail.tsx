import {
  CardDetailImage,
  CardDetailSpan,
  CardDetailText,
  CardDetalleContainer,
} from "./styles";

interface Props {
  children: React.ReactNode;
}

export default function CardDetail({ children }: Props) {
  return (
    <CardDetalleContainer>
      <CardDetailImage
        src=" https://cdn.pixabay.com/photo/2017/06/02/19/12/broken-link-2367103_1280.png"
        alt="Imagen no encontrada"
      />
      <CardDetailSpan>{children}</CardDetailSpan>
      <CardDetailText>{children}</CardDetailText>
    </CardDetalleContainer>
  );
}
