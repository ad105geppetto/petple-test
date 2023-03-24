import { useRecoilState } from "recoil";
import { modalMessageState } from "../../../../commons/store";
import * as S from "./ErrorModal.styles";

interface IErrorModalProps {
  onCancel: () => void;
}

export default function ErrorModal(props: IErrorModalProps) {
  const [modalMessage, setModalMessage] = useRecoilState(modalMessageState);

  const ModalCancel = () => {
    props.onCancel();
    setModalMessage("");
  };
  return (
    <S.ModalBackground>
      <S.ModalWrapper>
        <S.ModalHead>
          <S.WarningLogo />
        </S.ModalHead>
        <S.ModalBody>
          <S.TitleBox>
            <S.Title>에러 메시지</S.Title>
          </S.TitleBox>
          <S.ContentsBox>
            <p>{modalMessage}</p>
          </S.ContentsBox>
        </S.ModalBody>
        <S.ModalFoot>
          <S.Confirm onClick={ModalCancel}>OK</S.Confirm>
        </S.ModalFoot>
      </S.ModalWrapper>
    </S.ModalBackground>
  );
}
