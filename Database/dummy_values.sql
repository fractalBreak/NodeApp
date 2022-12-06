USE apointdb;
INSERT INTO job_type (type_name)
VALUES ('window');
INSERT INTO job_type (type_name)
VALUES ('door');
INSERT INTO job_type (type_name)
VALUES ('roof');
INSERT INTO job_type (type_name)
VALUES ('other');

INSERT INTO job (job_contact , job_phone , job_address , job_city , job_state , job_zip , job_type , job_start , job_estimate)
VALUES ('carlos' , '5551018877' , '6147 george wood lane' , 'jacksonville' , 'florida' , '32244' , 2 , '2022-12-12 00:00:00' , 3 );
INSERT INTO job (job_contact , job_phone , job_address , job_city , job_state , job_zip , job_type , job_start , job_estimate)
VALUES ('charlie b' , '5559093344' , '5749 Red pine counrt' , 'jacksonville' , 'florida' , '32210' , 1 , '2022-12-13 00:00:00' , 2 );

INSERT INTO employee (name_first , name_last) 
VALUES ('john' , 'doe');
INSERT INTO employee (name_first , name_last)
VALUES ('steve' , 'jobs');

INSERT INTO employee_jobs (employee_id , job_id)
VALUES (11001 , 100001);
INSERT INTO employee_jobs (employee_id , job_id)
VALUES (11001 , 100002);
INSERT INTO employee_jobs (employee_id , job_id)
VALUES (11002 , 100001);
INSERT INTO employee_jobs (employee_id , job_id)
VALUES (11002 , 100002);
