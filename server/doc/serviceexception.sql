CREATE TABLE serviceexception
(
  serviceexceptionid bigserial NOT NULL,
  accountid bigint,
  accountlevelid bigint,
  service character varying,
  permission boolean,
  CONSTRAINT serviceexception_pkey PRIMARY KEY (serviceexceptionid),
  CONSTRAINT serviceexception_account_fkey FOREIGN KEY (accountid)
      REFERENCES account (accountid) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT serviceexception_accountlevelid_fkey FOREIGN KEY (accountlevelid)
      REFERENCES accountlevel (accountlevelid) MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);