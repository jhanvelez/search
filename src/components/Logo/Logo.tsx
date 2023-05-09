import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  padding: 0 1dvh;
  margin: 0 1dvh;
`;

interface Props {
  styles: {};
}

export default function Logo({ styles }: Props) {
  return (
    <div style={styles}>
      <Img
        src="https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751_1280.png"
        alt="Google Chrome"
      />
    </div>
  );
}
