import {
  Card,
  Col,
  Row,
  Text,
} from '@nextui-org/react';
import PropTypes from 'prop-types';
import { Tag, TagShape } from '../Tag';

export function PreviewCard({
  title,
  coverImage,
  tag,
  date,
}) {
  return (
    <Card isHoverable isPressable className="max-w-md">
      <Card.Header css={{ position: 'absolute', zIndex: 1, bottom: 5 }}>
        <Text size={12} transform="uppercase" weight="bold">
          {title}
        </Text>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          alt="Relaxing app background"
          height="100%"
          objectFit="cover"
          src={coverImage}
          width="100%"
        />
      </Card.Body>
      <Card.Footer
        css={{
          position: 'absolute',
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Tag title={tag} />
          </Col>
          <Col>
            <Row align="center" justify="flex-end">

              <Text
                color="white"
                size={18}
                transform="uppercase"
                weight="bold"
              >
                {date}
              </Text>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

PreviewCard.propTypes = {
  coverImage: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tag: TagShape.isRequired,
  title: PropTypes.string.isRequired,
};
