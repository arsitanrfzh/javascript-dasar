create database pegawai;

-- Memanggil database
use pegawai;

create table hobi(
id int primary key,
nama_hobi varchar(50) not null);

create table asn(
nip char(18) primary key,
nama varchar(100) ,
id_hobi int,
foreign key(id_hobi)
references hobi(id));

-- Mengganti nama kolom di table asn
alter table asn change nama nama_lengkap varchar(100);

-- Mengganti nama table
rename table asn to pns;

show databases;
show tables;

-- Menghapus table dan database
drop table pns;
drop database pegawai;

-- Memasukan data ke table hobi
insert into hobi values
(1, 'Memasak'),
(2, 'Olahraga'),
(3, 'Menyanyi'),
(4, 'Membaca');

-- Menghapus data pada kolom asn
delete from asn;

-- Memasukkan data ke table asn
insert into asn values
('127356789012345678','Rose',1),
('613456780985436326','Jasmine',2),
('543456789012415604','Daisy',3),
('21345698901234501','Lavender',2),
('963456989012345676','Orchid',1);

-- Menampilkan data table
select * from hobi;
select * from asn;

-- Update data di table asn dengan nip 543456789012415604
update asn set nama = 'Sunflower' where nip = '543456789012415604';

-- Menghapus data di table asn dengan nip '543456789012415604'
delete from asn where nip = '543456789012415604';

-- Mencari data yang akan dipilih pada table
select nip, nama from asn where nip in ('963456989012345676', '613456780985436326');