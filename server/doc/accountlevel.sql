CREATE TABLE accountlevel
(
  accountlevelid bigserial NOT NULL,
  name character varying,
  weight bigint,
  CONSTRAINT accountlevel_pkey PRIMARY KEY (accountlevelid)
)
WITH (
  OIDS=FALSE
);