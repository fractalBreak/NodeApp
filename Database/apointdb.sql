DROP SCHEMA IF EXISTS apointdb;
CREATE DATABASE apointdb; 
USE apointdb;
CREATE TABLE employee (
    id           SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    name_first   VARCHAR(15) NOT NULL,
    name_last    VARCHAR(15) NOT NULL,
    date_hired   TIMESTAMP NOT NULL DEFAULT NOW(),
    phone_number VARCHAR(10),
    CONSTRAINT employee_pk PRIMARY KEY (id)
);
ALTER TABLE employee AUTO_INCREMENT=11001;
CREATE TABLE job_type (
    id          SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    type_name   VARCHAR(30) NOT NULL,
    CONSTRAINT job_type_pk PRIMARY KEY (id)
);
CREATE TABLE job (
    id           integer UNSIGNED NOT NULL AUTO_INCREMENT,
    job_contact  VARCHAR(30) NOT NULL,
    job_phone    VARCHAR(10) NOT NULL,
    job_address  VARCHAR(30) NOT NULL,
    job_city     VARCHAR(30) NOT NULL,
    job_state    VARCHAR(15) NOT NULL,
    job_zip      NUMERIC(5) NOT NULL,
    job_type     SMALLINT UNSIGNED,
    job_start    DATETIME NOT NULL,
    job_estimate integer NOT NULL,
    date_created DATETIME NOT NULL DEFAULT NOW(),
    CONSTRAINT job_pk PRIMARY KEY (id),
    CONSTRAINT job_type_fk
		FOREIGN KEY (job_type) REFERENCES job_type(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);
ALTER TABLE job AUTO_INCREMENT=100001;
CREATE TABLE employee_jobs (
    employee_id SMALLINT UNSIGNED,
    job_id      INTEGER UNSIGNED,
    CONSTRAINT empoyee_job_pk PRIMARY KEY (employee_id , job_id),
    CONSTRAINT employee_fk    FOREIGN KEY (employee_id) REFERENCES employee (id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE,
    CONSTRAINT job_fk FOREIGN KEY (job_id) REFERENCES job (id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);
CREATE TABLE jobs_types (
	job_id		integer UNSIGNED,
    job_type_id	SMALLINT UNSIGNED,
    CONSTRAINT jobs_types_pk
        PRIMARY KEY (job_id, job_type_id),
    CONSTRAINT job_id_fk
		FOREIGN KEY (job_id) REFERENCES job(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
	CONSTRAINT job_type_id
		FOREIGN KEY (job_type_id) REFERENCES job_type(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
CREATE VIEW employees AS
    SELECT  
        name_last  AS 'Last Name',
        name_first AS 'First Name',
        phone_number AS 'Phone'
    FROM
        employee
    ORDER BY
        name_last ASC;

CREATE VIEW upcoming_jobs AS
    SELECT 
        job_address AS 'Address', 
        job_city    AS 'City' , 
        job_state   AS 'State', 
        job_zip     AS 'ZIP',
        job_contact AS 'Point of Contact',
        job_phone   AS 'Phone No.'
    FROM
        job
    WHERE
        job_start > NOW()
    ORDER BY
        job_start;
DELIMITER $$
CREATE PROCEDURE add_employee(
    IN name_first_param VARCHAR(15),
    IN name_last_param VARCHAR(15),
    IN phone_number_param VARCHAR(10)
    )
BEGIN
    INSERT INTO 
        employee (name_first, name_last, phone_number)
    VALUES 
		(name_first_param, name_last_param, phone_number_param);
END

$$
DELIMITER $$
CREATE PROCEDURE delete_employee(
    IN employee_id_param SMALLINT
    )
BEGIN
    DELETE FROM employee WHERE id = employee_id_param;
END
$$

DELIMITER $$
CREATE PROCEDURE update_employee_phone (
    IN employee_id_param SMALLINT,
    IN employee_phone_param VARCHAR(10)
    )
BEGIN
    UPDATE
        employee
    SET
        phone_number = employee_phone_param
    WHERE
        id = employee_id_param;
END
$$

DELIMITER $$
CREATE PROCEDURE add_job (
    IN job_contact_param  VARCHAR(30),
    IN job_phone_param    VARCHAR(10),
    IN job_address_param  VARCHAR(30),
    IN job_city_param     VARCHAR(30),
    IN job_state_param    VARCHAR(15),
    IN job_zip_param      NUMERIC(5),
    IN job_type_param     SMALLINT,
    IN job_start_param    DATETIME,
    IN job_estimate_param integer,
    )
BEGIN
    INSERT INTO job (
        job_contact,
        job_phone,
        job_address,
        job_city,
        job_start,
        job_zip,
        job_type,
        job_start,
        job_estimate
        )
    VALUES (
        job_contact_param,
        job_phone_param,
        job_address_param,
        job_city_param,
        job_start_param,
        job_zip_param,
        job_type_param,
        job_start_param,
        job_estimate_param
    )
END
$$

DELIMITER $$
CREATE PROCEDURE delete_job (
    IN job_id_param integer
    )
BEGIN
    DELETE FROM job WHERE id = job_id_param;
END
$$

DELIMITER $$
CREATE PROCEDURE reschedule_job (
    IN job_id_param,
    IN job_start_param DATETIME
    )
BEGIN
    UPDATE
        job
    SET 
        job_start = job_start_param
    WHERE
        id = job_id_param;
END
$$

DELIMITER $$
CREATE PROCEDURE add_job_type(
    IN job_type_param VARCHAR(28)
    )
BEGIN
    INSERT INTO 
        job_type(type_name)
    VALUES      
        (job_type_param);
END
$$

DELIMITER $$
CREATE PROCEDURE get_individual_schedule(
    IN employee_id_param SMALLINT
    )
BEGIN
    SELECT 
	    e.name_first AS employee_name,
	    j.job_address AS adress,
        j.job_start AS start_time
    FROM
	    employee_jobs ej
    INNER JOIN
	    job j ON ej.job_id = j.id
    INNER JOIN
	    employee e ON ej.employee_id = e.id
    WHERE e.id = employee_id_param;
END
$$

DELIMITER $$
CREATE PROCEDURE get_workers(
    IN job_id_param integer
    )
BEGIN
    SELECT 
    	j.job_address AS adress,
        j.job_start AS start_time,
	    e.name_first AS employee_name
    FROM
	    employee_jobs ej
    INNER JOIN
	    employee e ON ej.employee_id = e.id
    INNER JOIN
	    job j ON ej.job_id = j.id
    WHERE j.id = job_id_param;
END
$$

DELIMITER $$
CREATE PROCEDURE placeholder ()
BEGIN
END
$$