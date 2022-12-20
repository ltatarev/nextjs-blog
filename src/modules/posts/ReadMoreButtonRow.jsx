import { Button, Row } from '@nextui-org/react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { RightArrow } from '../icons';

export function ReadMoreButtonRow() {
  const t = useTranslations('ReadMore');

  return (
    <Row className="mb-10 flex place-content-end">
      <Link href="/blog">
        <Button auto bordered ghost shadow className="group self-end hover:bg-purple-800" color="secondary" iconRight={<RightArrow />}>
          {t('title')}
        </Button>
      </Link>
    </Row>
  );
}
