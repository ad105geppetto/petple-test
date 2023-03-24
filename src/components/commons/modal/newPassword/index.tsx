import { useRouter } from "next/router";
import * as S from "./NewPasswordModal.styles";

interface INewPasswordModalProps {
  onCancel: () => void;
}

export default function NewPasswordModal(props: INewPasswordModalProps) {
  const router = useRouter();

  const ModalCancel = () => {
    props.onCancel();
    void router.push("/");
  };

  return (
    <S.ModalBackground>
      <S.ModalWrapper>
        <S.ModalHead>
          <S.CheckLogo />
        </S.ModalHead>
        <S.ModalBody>
          <S.TitleBox>
            <S.Title>비밀번호가 변경되었습니다.</S.Title>
          </S.TitleBox>
        </S.ModalBody>
        <S.ModalFoot>
          <S.Confirm onClick={ModalCancel}>OK</S.Confirm>
        </S.ModalFoot>
      </S.ModalWrapper>
    </S.ModalBackground>
  );
}
