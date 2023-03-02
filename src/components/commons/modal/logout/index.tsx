import * as S from "./LogoutModal.styles";

interface ILogoutModalProps {
  onLogout: () => void;
  onCancle: () => void;
}

export default function LogoutModal(props: ILogoutModalProps) {
  const ModalConfirm = () => {
    props.onLogout();
  };

  const onClickCancel = () => {
    props.onCancle();
  };

  return (
    <S.ModalBackground>
      <S.ModalWrapper>
        <S.ModalHead>
          <S.CheckLogo />
        </S.ModalHead>
        <S.ModalBody>
          <S.TitleBox>
            <S.Title>로그아웃 하시겠습니까?</S.Title>
          </S.TitleBox>
        </S.ModalBody>
        <S.ModalFoot>
          <S.Confirm onClick={ModalConfirm} isLogout={false}>
            YES
          </S.Confirm>
          <S.Confirm onClick={onClickCancel} isLogout={false}>
            NO
          </S.Confirm>
        </S.ModalFoot>
      </S.ModalWrapper>
    </S.ModalBackground>
  );
}
