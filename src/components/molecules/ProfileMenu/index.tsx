import Header from '../../atoms/Header';
import Styled from './styles';
import MainTitle from '../../atoms/MainTitle';
import ModalTemplate from '../../templates/Modal';
import ProfileNavigation from '../ProfileNavigation';

const ProfileMenu = ({ modalToggle }: { modalToggle: (val: boolean) => void }) => (
  <ModalTemplate isAdjustedToParent modalToggle={modalToggle}>
    <Header>
      <MainTitle>Voirsy</MainTitle>
      <button type="button" onClick={() => modalToggle(false)}>
        Close
      </button>
    </Header>
    <Styled.ModalContent>
      <ProfileNavigation />
    </Styled.ModalContent>
  </ModalTemplate>
);

export default ProfileMenu;
