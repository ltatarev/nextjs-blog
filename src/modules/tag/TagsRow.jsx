import { Tag } from './Tag';
import { CATEGORIES } from './tags';

export function TagsRow() {
  return (
    <div className="my-10 flex flex-row flex-wrap place-content-center">
      {CATEGORIES.map((category, index) => (
        <Tag key={category.title} outline index={index} title={category.title} />
      ))}
    </div>
  );
}
