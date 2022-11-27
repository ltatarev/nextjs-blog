import { Button, Row } from '@nextui-org/react';
import Link from 'next/link';
import { RightArrow } from '../icons';

export function ReadMoreButtonRow() {
  return (
    <Row className="mb-10 flex place-content-end">
      <Link href="/blog">
        <Button
          auto
          bordered
          ghost
          shadow
          className="group self-end hover:bg-purple-800"
          color="secondary"
          iconRight={<RightArrow />}
        >
          Pročitaj više na blogu
        </Button>
      </Link>
    </Row>
  );
}
