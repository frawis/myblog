import { CustomPortableText } from '~/components/shared/custom-portable-text';

interface HeaderProps {
  centered?: boolean;
  description?: any[];
  title?: string;
}
export function Header(props: HeaderProps) {
  const { title, description, centered = false } = props;
  if (!description && !title) {
    return null;
  }
  return (
    <div className={`${centered ? 'text-center' : 'lg:w-3/5'}`}>
      {/* Title */}
      {title && <div className="text-3xl font-extrabold tracking-tight md:text-5xl">{title}</div>}
      {/* Description */}
      {description && (
        <div className="mt-4 text-gray-300 md:text-lg">
          <CustomPortableText value={description} />
        </div>
      )}
    </div>
  );
}
