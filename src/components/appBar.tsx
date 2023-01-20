import Button from '@component/button';
import NewQuestionForm from '@component/newQuestionForm';
import UserMenu from '@component/userMenu';
import { ModalContext } from '@context/modalContext';
import plusIcon from '@iconify/icons-uil/plus';
import { Icon } from '@iconify/react';
import db from 'db.json';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

interface IProps {}

function AppBar({}: IProps) {
  const { setTitle, setOpen, setContent } = useContext(ModalContext);

  React.useEffect(() => {
    setTitle('ایجاد پاسخ جدید');
    setContent(
      <NewQuestionForm
        onDismiss={() => {
          setOpen(false);
        }}
      />,
    );
  }, []);

  return (
    <header className="bg-white px-4 py-3 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-h1 font-bolder">
            <Link to="/">لیست سوالات</Link>
          </h1>
        </div>
        <div className="gap-1 flex">
          <Button
            onClick={() => {
              setOpen(true);
            }}
            prefix={<Icon icon={plusIcon} />}
          >
            سوال جدید
          </Button>
          <UserMenu user={db.me} />
        </div>
      </div>
    </header>
  );
}

export default AppBar;
