import Button from '@component/button';
import FormInput from '@component/formInput';
import FormTextArea from '@component/formTextArea';
import React from 'react';

interface IProps {
  onDismiss?: () => void;
}

function NewQuestionForm({ onDismiss }: IProps) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        alert('SUBMITTED');
      }}
    >
      <FormInput
        label="موضوع"
        placeholder="موضوع سوال خود را وارد کنید"
        errorText="وارد کردن موضوع سوال الزامی است"
        hasError={false}
        onChange={() => {}}
      />
      <FormTextArea
        label="متن سوال"
        placeholder="متن سوال خود را وارد کنید"
        errorText="وارد کردن متن سوال الزامی است"
        hasError={false}
        onChange={() => {}}
      />

      <div className="mt-6 flex justify-end items-center gap-4">
        <Button variant="text" type="button" onClick={onDismiss}>
          انصراف
        </Button>
        <Button variant="contained" type="submit">
          ارسال پاسخ
        </Button>
      </div>
    </form>
  );
}

export default NewQuestionForm;
