import { format } from 'date-fns';

const Date = ({ publishedAt }: { publishedAt: string }) => {
  const date = format(Number(publishedAt), 'MMM dd, yyyy');

  return <p className="text-sm">{date}</p>;
};

export default Date;
