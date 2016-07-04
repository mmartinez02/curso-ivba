CREATE TABLE account
(
  accountid bigserial NOT NULL,
  lastname character varying,
  nick character varying(8),
  email character varying,
  name character varying,
  accountlevelid bigint,
  password character varying(8),
  CONSTRAINT account_pkey PRIMARY KEY (accountid),
  CONSTRAINT account_accountlevelid_fkey FOREIGN KEY (accountlevelid)
      REFERENCES accountlevel (accountlevelid) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT account_nick_key UNIQUE (nick)
)
WITH (
  OIDS=FALSE
);
