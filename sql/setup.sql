-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP table if exists bears;
CREATE table bears (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR,
    type VARCHAR,
    color VARCHAR,
    willEatFace BOOLEAN,
    coolFactor BIGINT
);

INSERT INTO bears (name, type, color, willEatFace, coolFactor) VALUES 
(
    'Pooh Bear',
    'Cartoon',
    'Yellow',
    'false',
    '6'
),
(
    'Black Bear',
    'Actual Bear',
    'Black',
    'true',
    '7'
),
(
    'Brown Bear',
    'Actual Bear',
    'Brown',
    'true',
    '4'
),
(
    'Grizzly Bear',
    'Actual Terrifying Bear',
    'Brown',
    'true',
    '8'
),
(
    'Yogi Bear',
    'Cartoon Bear',
    'Brown',
    'false',
    '3'
),
(
    'Chicago Bear',
    'Football Player',
    'Orange',
    'false',
    '2'
);