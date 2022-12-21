import { Tag } from './Tag';
import { CATEGORIES } from './tags';

export function TagsRow() {
  return (
    <div className="my-10 flex flex-row flex-wrap place-content-center">
      {CATEGORIES.map((category, index) => (
        <div key={category.title} className="mx-8">
          <Tag outline index={index} title={category.title} />
        </div>
      ))}
    </div>
  );
}
