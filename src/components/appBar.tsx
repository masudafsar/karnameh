import Button from '@component/button';
import NewQuestionForm from '@component/newQuestionForm';
import UserMenu from '@component/userMenu';
import { ModalContext } from '@context/modalContext';
import plusIcon from '@iconify/icons-uil/plus';
import { Icon } from '@iconify/react';
import UserServices from '@service/userServices';
import { IUserType } from '@type/user.type';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

interface IProps {}

function AppBar({}: IProps) {
  const { setTitle, setOpen, setContent } = useContext(ModalContext);
  const [currentUser, setCurrentUser] = React.useState<IUserType>();

  function openNewQuestionModal() {
    setTitle('ایجاد پاسخ جدید');
    setContent(
      <NewQuestionForm
        onDismiss={() => {
          setOpen(false);
        }}
      />,
    );
    setOpen(true);
  }

  async function loadCurrentUserInfo() {
    const userInfo = await UserServices.getCurrentUser();
    setCurrentUser(userInfo.data);
  }

  React.useEffect(() => {
    loadCurrentUserInfo();
  }, []);

  return (
    <header className="bg-white shadow">
      <div className="container px-4 py-3 mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-h1 font-bolder">
            <Link to="/">لیست سوالات</Link>
          </h1>
        </div>
        <div className="gap-1 flex">
          <Button onClick={openNewQuestionModal} prefix={<Icon icon={plusIcon} />}>
            سوال جدید
          </Button>
          {currentUser && <UserMenu user={currentUser} />}
        </div>
      </div>
    </header>
  );
}

export default AppBar;
