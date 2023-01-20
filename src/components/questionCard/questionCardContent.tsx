import { convertTextToParagraph } from '@helper/stringUtils';
import React from 'react';

interface IProps {
  body: string;
}

function QuestionCardContent({ body }: IProps) {
  return <>{convertTextToParagraph(body, 'mb-2')}</>;
}

export default QuestionCardContent;
