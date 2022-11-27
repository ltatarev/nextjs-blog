import {
  Card, Col, Row, Text,
} from '@nextui-org/react';
import PropTypes from 'prop-types';
import { Tag } from '../tag';

export function PreviewCard({
  title, coverImage, tag, date,
}) {
  return (
    <Card isHoverable isPressable className="h-full min-h-max border-0 bg-transparent">
      <Card.Header className="fixed inset-x-3 bottom-14">
        <Text className="text-3xl font-bold text-slate-50">{title}</Text>
      </Card.Header>
      <Card.Body className="p-0">
        <Card.Image alt={title} height="100%" objectFit="cover" src={coverImage} width="100%" />
      </Card.Body>
      <Card.Footer
        className="fixed
          inset-x-0
          bottom-0
          h-28
          bg-gradient-to-t
          from-[#2a2b2b]
          to-transparent"
      >
        <Row className="fixed bottom-3 p-3">
          <Col className="w-auto">
            <Tag title={tag} />
          </Col>
          <Col className="mr-5 text-end">
            <Text className="text-lg font-bold uppercase text-slate-50">{date}</Text>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

PreviewCard.propTypes = {
  coverImage: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
