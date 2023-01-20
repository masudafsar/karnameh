import { convertTextToParagraph } from '@helper/stringUtils';
import React from 'react';

interface IProps {
  body: string;
}

function AnswerCardContent({ body }: IProps) {
  return <>{convertTextToParagraph(body, 'mb-2')}</>;
}

export default AnswerCardContent;
