use sekolah;

-- Mengganti nama table
alter table table1 rename to agama;

-- Menghapus table
drop table agama;

insert into agama (kode, nama) values
(1, 'Islam'),
(2, 'Protestan'),
(3, 'Katholik'),
(4, 'Budha'),
(5, 'Hindu');
