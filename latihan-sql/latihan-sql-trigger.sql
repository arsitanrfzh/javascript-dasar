use pegawai;
-- Menambahkan table baru
create table asn_audit(
id int auto_increment primary key,
aksi varchar(20),
nip varchar(100),
nama varchar(100),
id_hobi int,
tgl datetime);

-- Untuk ngasih tau after_nip_ditambah dengan aksi ditambah dan tgl tambahnya kapan (merecord apa saja perubahan yg dibuat)
create trigger after_nip_ditambah
after insert on asn
for each row
insert into asn_audit
set aksi = 'Tambah',
nip = new.nip,
nama = new.nama,
id_hobi = new.id_hobi,
tgl = now();

-- Menambahkan data
insert into asn values
('876592340983281746','Mawar',2);

-- Menampilkan data yang baru ditambahkan
select * from asn_audit;

-- menghapus trigger
drop trigger after_nip_ditambah;