const persianDigit: string[] = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
const arabicDigit: string[] = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
const englishDigit: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export function convertDigits(str: string, src: string[], dst: string[]) {
  let newStr = str;
  for (let i = 0; i < Math.min(src.length, dst.length); i++) {
    newStr = newStr.replaceAll(src[i], dst[i]);
  }
  return newStr;
}

export function convertDigitsToPersian(str: string) {
  return convertDigits(
    convertDigits(str, arabicDigit, persianDigit),
    englishDigit,
    persianDigit,
  );
}

export function convertDigitsToArabic(str: string) {
  return convertDigits(
    convertDigits(str, persianDigit, arabicDigit),
    englishDigit,
    arabicDigit,
  );
}

export function convertDigitsToEnglish(str: string) {
  return convertDigits(
    convertDigits(str, arabicDigit, englishDigit),
    persianDigit,
    englishDigit,
  );
}

export function convertTextToParagraph(str: string, className?: string) {
  return str.split('\n').map((item, index) => (
    <p className={className} key={index}>
      {item}
    </p>
  ));
}
