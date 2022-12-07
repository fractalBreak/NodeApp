USE apointdb;
CALL add_job_type('window');
CALL add_job_type('door');
CALL add_job_type('roof');
CALL add_job_type('plumbing');
CALL add_job_type('other');

CALL add_job('carlos' , '5551018877' , '6147 george wood lane' , 'jacksonville' , 'florida' , '32244' , 2 , '2022-12-12 00:00:00' , 3 );
CALL add_job('charlie b' , '5559093344' , '5749 Red pine counrt' , 'jacksonville' , 'florida' , '32210' , 1 , '2022-12-13 00:00:00' , 2 );
CALL add_job('annette c' , '5559384756' , '123 mulberry ln' , 'jacksonville' , 'florida' , '32435' , 3 , '2022-12-13 07:30:00' , 1);

CALL add_employee('john' , 'doe' , '9041234567');
CALL add_employee('steve' , 'jobs' , '9042345678');
CALL add_employee('oscar' , 'wilde' , '6758889090');
CALL add_employee('bruce' , 'campbell' , '0010151981');

CALL assign_workers_to_job(11001 , 100001);
CALL assign_workers_to_job(11001 , 100002);
CALL assign_workers_to_job(11002 , 100001);
CALL assign_workers_to_job(11002 , 100002);
CALL assign_workers_to_job(11003 , 100003);
CALL assign_workers_to_job(11004 , 100003);
